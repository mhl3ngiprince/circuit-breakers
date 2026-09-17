$f = Get-ChildItem public -Filter "*FlexClip*" | Select-Object -First 1
$bytes = [System.IO.File]::ReadAllBytes($f.FullName)

# Walk the GIF properly: skip header + LSD, then scan blocks
$i = 13
if ($bytes[10] -band 0x80) { $i += 3 * [math]::Pow(2, (($bytes[10] -band 0x07) + 1)) }
$i = [int]$i
"Data starts at offset: $i"

$frameDims = @()
$guard = 0
while ($i -lt $bytes.Length -and $guard -lt 20000) {
    $guard++
    $b = $bytes[$i]

    if ($b -eq 0x3B) { break }  # trailer

    if ($b -eq 0x21) {
        # extension: label + sub-blocks
        $i += 2
        while ($i -lt $bytes.Length -and $bytes[$i] -ne 0) { $i += $bytes[$i] + 1 }
        $i++
    }
    elseif ($b -eq 0x2C) {
        # image descriptor -> real frame dimensions
        $lw = $bytes[$i + 5] + ($bytes[$i + 6] -shl 8)
        $lh = $bytes[$i + 7] + ($bytes[$i + 8] -shl 8)
        if ($frameDims.Count -lt 5) { $frameDims += "${lw}x${lh}" }
        $flags = $bytes[$i + 9]
        $i += 10
        if ($flags -band 0x80) { $i += 3 * [math]::Pow(2, (($flags -band 0x07) + 1)) }
        $i = [int]$i
        $i++  # LZW min code size
        while ($i -lt $bytes.Length -and $bytes[$i] -ne 0) { $i += $bytes[$i] + 1 }
        $i++
    }
    else { break }
}

"First frame dimensions: " + ($frameDims -join ', ')
