const processText = (text, name) => {
  const hashtagRegex = /#(\w+)/g
  const usernameRegex = /@(\w+)/g

  const textWithHashtags = text.replace(
    hashtagRegex,
    '<a href="#" style="color: blue; text-decoration: none">#$1</a>'
  )

  const textWithLinks = textWithHashtags.replace(
    usernameRegex,
    '<a href="#" style="color: blue; text-decoration: none">@$1</a>'
  )
  const finalHTML = `<strong>${name}</strong> ${textWithLinks}`
  // Okay to use here since we know the HTML source
  return <div dangerouslySetInnerHTML={{ __html: finalHTML }} />
}

export { processText }
