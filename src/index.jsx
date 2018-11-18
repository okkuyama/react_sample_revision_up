import React from 'react'
import {render} from 'react-dom'
import {checkRevision} from './revision_check'
import RevisionUpMessage from './revision_up_message'

class App extends React.Component {
  // コンストラクタ
  constructor(props) {
    super(props)
    // 配列初期値設定
    this.state = {
      input_values: {
        list_value: ''
      },
      lists: ['hoge', 'fuga']
    }
  }

  // フォーム値の変化イベント
  handleChange(e) {
    var input_values = this.state.input_values
    switch (e.target.name) {
      case 'list_value':
      input_values.list_value = e.target.value
      break
    }
    this.setState({input_values: input_values})
  }

  // リスト追加イベント
  handleAdd(e) {
    // リビジョンの確認
    checkRevision()
    .then( result => {
      // 何らかのAPI通信

      // stateの変更
      this.setState({
        lists: this.state.lists.concat([this.state.input_values.list_value]),
        input_values: {
          list_value: ''
        }
      })
    },
    err => {
      console.log("リビジョン確認失敗")
    })
  }

  // レンダリング
  render () {
    return (
      <div>
        <RevisionUpMessage />
        <ul className="list-group">
          { this.state.lists.map( list => (<li className="list-group-item">{list}</li>)) }
        </ul>
        <div className="input-group mb-3">
          <input type="text" className="form-control" name="list_value" value={this.state.input_values.list_value} onChange={this.handleChange.bind(this)} placeholder="リストを入力" aria-label="リストを入力" aria-describedby="basic-addon2" />
          <div className="input-group-append">
            <button className="btn btn-outline-secondary" type="button" onClick = { this.handleAdd.bind(this) }>追加</button>
          </div>
        </div>
      </div>
    )
  }
}

render(<App/>, document.getElementById('app'))