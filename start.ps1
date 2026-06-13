Write-Host "Starting RLGL Test Management..." -ForegroundColor Cyan

Set-Location "C:\Code\test-management"

# Start all services including cloudflared tunnel
docker compose up -d

Write-Host "Waiting for tunnel URL..." -ForegroundColor Yellow

# Poll logs until cloudflared prints the public URL
$url = $null
$attempts = 0
while (-not $url -and $attempts -lt 30) {
    Start-Sleep -Seconds 3
    $logs = docker compose logs cloudflared 2>&1
    $match = $logs | Select-String "trycloudflare.com"
    if ($match) {
        $url = ($match.Line -split "https://")[1] -split " " | Select-Object -First 1
        $url = "https://$url"
    }
    $attempts++
}

if ($url) {
    Write-Host ""
    Write-Host "========================================" -ForegroundColor Green
    Write-Host "  App is live at: $url" -ForegroundColor Green
    Write-Host "========================================" -ForegroundColor Green
    Write-Host ""
    # Open in browser automatically
    Start-Process $url
} else {
    Write-Host "Tunnel started - check URL with: docker compose logs cloudflared" -ForegroundColor Yellow
}
