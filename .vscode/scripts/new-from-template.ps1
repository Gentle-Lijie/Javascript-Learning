param(
  [string]$Name
)

# If no name provided, prompt the user
if (-not $Name -or $Name -eq '') {
  $Name = Read-Host "Enter new file name (relative to workspace root, e.g. Basic Grammar/newfile.html)"
}

if (-not $Name) {
  Write-Error "No filename provided. Aborting."
  exit 1
}

$workspaceRoot = (Get-Location).Path
$targetPath = Join-Path $workspaceRoot $Name
$dir = Split-Path $targetPath -Parent

if (-not (Test-Path $dir)) {
  New-Item -ItemType Directory -Path $dir -Force | Out-Null
}

$templatePath = Join-Path $workspaceRoot ".vscode\templates\html-template.html"
if (-not (Test-Path $templatePath)) {
  Write-Error "Template not found at $templatePath"
  exit 1
}

$content = Get-Content -Raw -Path $templatePath
$fileNameOnly = Split-Path $targetPath -Leaf

# Replace placeholder
$content = $content -replace "\{\{FILENAME\}\}", [System.IO.Path]::GetFileNameWithoutExtension($fileNameOnly)

# Write file
Set-Content -Path $targetPath -Value $content -Encoding UTF8

Write-Output "Created file: $targetPath"