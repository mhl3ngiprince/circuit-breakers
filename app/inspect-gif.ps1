$f = Get-Item "public\Circuit Breakers - Made with FlexClip.gif"
if (-not $f) { $f = Get-ChildItem public -Filter "*FlexClip*" | Select-Object -First 1 }
"File: $($f.Name)"
"Size MB: " + [math]::Round($f.Length / 1MB, 2)

$bytes = [System.IO.File]::ReadAllBytes($f.FullName)

$sig = -join ($bytes[0..5] | ForEach-Object { [char]$_ })
"Signature: $sig"

# GIF logical screen descriptor
$w = $bytes[6] + ($bytes[7] -shl 8)
$h = $bytes[8] + ($bytes[9] -shl 8)
"Width: $w  Height: $h"

# Count graphic control extensions / image descriptors to gauge frame count
$frames = 0
for ($i = 0; $i -lt $bytes.Length - 1; $i++) {
    if ($bytes[$i] -eq 0x21 -and $bytes[$i + 1] -eq 0xF9) { $frames++ }
}
"Approx animated frames: $frames"
