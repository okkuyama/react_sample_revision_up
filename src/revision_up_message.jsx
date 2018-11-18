import React from 'react'
import {render} from 'react-dom'
import {setLocalStorageRevision, getLocalStorageRevision} from './revision_check'

class RevisionUpMessage extends React.Component {
  // コンストラクタ
  constructor(props) {
    super(props)
    this.state = {
      revision_complete_fl: false
    }
  }

  // 描画前
  static getDerivedStateFromProps(nextProps, prevState) {
    return ({
      revision_complete_fl: getLocalStorageRevision('revision_complete_fl')
    })
  }

  // 描画後
  componentDidMount(){
    // リビジョンアップ完了フラグを戻します。
    setTimeout(() => {
      setLocalStorageRevision({ revision_complete_fl: false })
      setLocalStorageRevision({ revision_changing_fl: false })
      this.setState({
        revision_complete_fl: false
      })
    }, 5000)
  }

  // レンダリング
  render () {
    if(this.state.revision_complete_fl){
      return (
        <div className="alert alert-primary alert-dismissible fade show" role="alert">
          最新バージョンへ更新完了しました。
        </div>
      )
    } else {
      return(null)
    }
  }
}
export default RevisionUpMessage