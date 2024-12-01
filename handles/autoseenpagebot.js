async function seen(id, token) {
  return await new Promise(async (resolve, reject) => {
    await axios.post(`https://graph.facebook.com/v21.0/me/messages`, {
      recipient: { id },
      sender_action: "mark_seen"
    }, {
      params: {
        access_token: token
      },
      headers: {
        "Content-Type": "application/json"
      }
    }).then((data) => {
      resolve(data);
    }).catch((err) => {
      reject(err);
    });
  });
}
