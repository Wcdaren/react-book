import axios from 'axios'

export function home() {
  return axios({
    method: 'get',
    url: `${process.env.REACT_APP_SAM_URL}/book/home`,
  })
}

export function detail(book) {
  return axios({
    method: 'get',
    url: `${process.env.REACT_APP_SAM_URL}/book/detail`,
    params: {
      fileName: book.fileName
    }
  })
}