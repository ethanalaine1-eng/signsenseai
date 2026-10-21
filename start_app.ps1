$ErrorActionPreference = 'Stop'

$folder = Split-Path -Parent $MyInvocation.MyCommand.Path
$serverUrl = 'http://localhost:8000/'

try {
    $response = Invoke-WebRequest -Uri $serverUrl -UseBasicParsing -TimeoutSec 2
    Write-Host 'Server is already running at ' $serverUrl
}
catch {
    Write-Host 'Starting local server...'
    Start-Process powershell -ArgumentList "-NoExit","-Command","Set-Location '$folder'; python -m http.server 8000"
    Start-Sleep -Seconds 2
}

Start-Process $serverUrl
Write-Host 'Open the browser at:' $serverUrl
