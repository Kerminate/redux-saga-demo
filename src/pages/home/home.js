import React, { Component } from 'react'
import { Card, Button, message } from 'antd'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getPersonData, cancelGetPersonData } from '../../store/actionCreators/home'
import './home.less'

class Home extends Component {
  componentDidUpdate (prevProps) {
    if (prevProps.result !== this.props.result) {
      const { result } = this.props
      if (result === 1) {
        message.success('请求成功')
      } else if (result === 2) {
        message.warning('请求被取消')
      } else if (result === 3) {
        message.error('请求失败')
      }
    }
  }
  render () {
    const { Meta } = Card
    const { avatar, description, name, loading, handleGetData, handleCancel } = this.props
    return (
      <div className='home'>
        <Card
          style={{ width: 300 }}
          loading={loading}
          cover={loading ? <div className='img-place' /> : <img alt='example' src={avatar} />}
          actions={[
            <Button type='primary' onClick={() => handleGetData('yyx990803')} >开始异步请求</Button>,
            <Button type='danger' onClick={() => handleCancel()}>取消异步请求</Button>
          ]}
        >
          <Meta
            title={name}
            description={description}
          />
        </Card>
      </div>
    )
  }
}

Home.propTypes = {
  avatar: PropTypes.string,
  description: PropTypes.string,
  name: PropTypes.string,
  loading: PropTypes.bool,
  result: PropTypes.number,
  handleGetData: PropTypes.func,
  handleCancel: PropTypes.func
}

const mapStatesToProps = (state) => {
  return {
    avatar: state.home.avatar,
    description: state.home.description,
    name: state.home.name,
    loading: state.home.loading,
    result: state.home.result
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleGetData (name) {
      dispatch(getPersonData(name))
    },
    handleCancel () {
      dispatch(cancelGetPersonData())
    }
  }
}

export default connect(
  mapStatesToProps,
  mapDispatchToProps
)(Home)
