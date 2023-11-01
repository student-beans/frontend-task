const processText = (text) => {
  const hashtagRegex = /#(\w+)/g
  const usernameRegex = /@(\w+)/g

  const textWithHashtags = text.replace(
    hashtagRegex,
    '<a href="#" style="color: blue; text-decoration: underline">#$1</a>'
  )

  const textWithLinks = textWithHashtags.replace(
    usernameRegex,
    '<a href="#" style="color: blue; text-decoration: underline">@$1</a>'
  )

  // Okay to use here since we know the HTML source
  return <div dangerouslySetInnerHTML={{ __html: textWithLinks }} />
}

export { processText }
