export const saveConfig = (config) => {
  const blob = new Blob([JSON.stringify(config)], { type: 'application/json' })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = `config-${Date.now()}.json`
  link.click()
}