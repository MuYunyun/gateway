import { provide, inject, lazyInject } from '../util/ioc';

@provide('MusicManager')
export default class MusicManager {
  public async getList() {
    const result = [{ title: '卡路里（电影《西虹市首富》插曲）', author: '火箭少女101', country: '内地', language: '国语' }]
    return result
  }
}
