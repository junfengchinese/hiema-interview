import { createAPI, createFormAPI } from '@/utils/request'

export const list = data => createAPI('/table/list', 'get', data)
