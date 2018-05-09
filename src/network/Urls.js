export const USERS = {
  login: '/users/login',
  register: '/users/register',
  code: '/users/code',
  update: '/users/update', //post {sex, name, face, status, latitude, longitude}
  user: '/users/user',
  notification: '/users/show_notification',
  connect_by_random: '/users/connect_by_random',
  connect_by_id: '/users/connect_by_id', //get, {code}
  disconnect: '/users/disconnect',
  invitation_code: '/users/invitation_code',
}

export const NOTES = {
  list: '/notes/list', // get
  publish: '/notes/publish', // post {title，content，images，latitude，longitude}
  like: '/notes/like', // post {note_id}
  delete: '/notes/delete', // get {note_id}
  update: '/notes/update', // post {note_id, title, content, images, mode}
}

export const UTILS = {
  qiniu_token: '/utils/qiniu_token', // get {filename}
}
