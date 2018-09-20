import React, { Component } from 'react'
import { Card, Button } from 'antd'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getPersonData } from '../../store/actionCreators/home'
import './home.less'

class Home extends Component {
  render () {
    const { Meta } = Card
    const { avatar, description, name, loading, handleGetData } = this.props
    return (
      <div className='home'>
        <Card
          style={{ width: 300 }}
          loading={loading}
          cover={<img alt='example' src={avatar} />}
          actions={[
            <Button type='primary' onClick={() => handleGetData('gaearon')} >开始异步请求</Button>,
            <Button type='danger'>取消异步请求</Button>
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
  handleGetData: PropTypes.func
}

const mapStatesToProps = (state) => {
  return {
    avatar: state.home.avatar,
    description: state.home.description,
    name: state.home.name,
    loading: state.home.loading
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleGetData (name) {
      dispatch(getPersonData(name))
    }
  }
}

export default connect(
  mapStatesToProps,
  mapDispatchToProps
)(Home)
