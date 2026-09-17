$ffmpeg = "node_modules\ffmpeg-static\ffmpeg.exe"
$src = (Get-ChildItem public -Filter "*FlexClip*" | Select-Object -First 1).FullName

"Source: $src"
"Source size MB: " + [math]::Round((Get-Item $src).Length / 1MB, 2)

# MP4 (H.264) - broadest support, primary background video
# -movflags +faststart puts the moov atom first so it can stream/autoplay progressively
& $ffmpeg -y -i "$src" -an `
    -vf "scale=1280:-2:flags=lanczos" `
    -c:v libx264 -profile:v main -preset slow -crf 30 -pix_fmt yuv420p `
    -movflags +faststart `
    "public\hero-bg.mp4" 2>&1 | Select-Object -Last 2

# WebM (VP9) - smaller, offered as an alternative source
& $ffmpeg -y -i "$src" -an `
    -vf "scale=1280:-2:flags=lanczos" `
    -c:v libvpx-vp9 -crf 40 -b:v 0 -row-mt 1 -cpu-used 2 -pix_fmt yuv420p `
    "public\hero-bg.webm" 2>&1 | Select-Object -Last 2

"--- Results ---"
foreach ($n in @("hero-bg.mp4", "hero-bg.webm")) {
    $p = "public\$n"
    if (Test-Path $p) {
        $mb = [math]::Round((Get-Item $p).Length / 1MB, 2)
        "$n : $mb MB"
    }
    else { "$n : MISSING" }
}
