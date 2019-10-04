function handleError(error: any) {
  const messagesError = error.graphQLErrors[0]
    ? error.graphQLErrors[0].message.message
        .map(item => item.message)
        .join('<br />')
    : 'Opp something went wrong! Please try again.';
  throw new Error(messagesError);
}

export { handleError };
