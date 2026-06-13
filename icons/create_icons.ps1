# PowerShell script to create PWA icons using .NET Drawing
Add-Type -AssemblyName System.Drawing

$sizes = @(16, 32, 48, 72, 96, 128, 144, 152, 192, 384, 512)
$outputDir = Split-Path -Parent $MyInvocation.MyCommand.Path

foreach ($size in $sizes) {
    $bmp = New-Object System.Drawing.Bitmap($size, $size)
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
    $g.Clear([System.Drawing.Color]::Transparent)

    # Red rounded rectangle background
    $radius = [int]($size * 0.22)
    $brush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(232, 25, 60))
    $rect = New-Object System.Drawing.Rectangle(0, 0, $size, $size)
    $path = New-Object System.Drawing.Drawing2D.GraphicsPath
    $path.AddArc($rect.X, $rect.Y, $radius*2, $radius*2, 180, 90)
    $path.AddArc($rect.Right - $radius*2, $rect.Y, $radius*2, $radius*2, 270, 90)
    $path.AddArc($rect.Right - $radius*2, $rect.Bottom - $radius*2, $radius*2, $radius*2, 0, 90)
    $path.AddArc($rect.X, $rect.Bottom - $radius*2, $radius*2, $radius*2, 90, 90)
    $path.CloseFigure()
    $g.FillPath($brush, $path)

    # White + sign
    $whiteBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::White)
    $thick = [int]($size * 0.15)
    $padding = [int]($size * 0.22)
    $len = $size - $padding * 2

    # Horizontal
    $g.FillRectangle($whiteBrush, $padding, ($size - $thick) / 2, $len, $thick)
    # Vertical
    $g.FillRectangle($whiteBrush, ($size - $thick) / 2, $padding, $thick, $len)

    $g.Dispose()
    $outPath = Join-Path $outputDir "icon-${size}x${size}.png"
    $bmp.Save($outPath, [System.Drawing.Imaging.ImageFormat]::Png)
    $bmp.Dispose()
    Write-Host "Created: $outPath"
}
Write-Host "All icons created!"
