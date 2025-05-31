export const generateSubscription = (baseUrl, params) => {
  const query = new URLSearchParams({
    target: params.target,
    url: encodeURIComponent(params.url),
    ...(params.config && { config: encodeURIComponent(params.config) }),
    ...(params.options.includes('add_emoji') && { emoji: 'true' }),
    ...(params.options.includes('remove_old_emoji') && { remove_old_emoji: 'true' })
  })
  return `${baseUrl}?${query}`
}

export const parseIniConfig = (text) => {
  return text.split('\n').filter(line => 
    line.trim() && !line.startsWith(';')
  )
}