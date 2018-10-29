import { container } from '../util/ioc'
import { injectable } from 'inversify'

@injectable()
export default class MusicManager {
  public async getList(title: string) {
    const result = [{ title: '卡路里（电影《西虹市首富》插曲）', author: '火箭少女101', country: '内地', language: '国语' }]
    if (title === '卡路里') {
      return result
    } else {
      return []
    }
  }
}

container.bind('MusicManager').to(MusicManager)