import React, { useState, useEffect, useRef } from 'react'
import { Modal, Form } from 'antd';
import FormComponent from '../components/form'

const ModalComponent = ({showModal, setShowModal, setAllPostData}) => {
  const formRef = useRef(null)
  const handleOk = () => {
   formRef.current.submit()
   setShowModal(false)
  }

  const handleCancel = () => {
    setShowModal(false)
  }

  return (
    <>
      <Modal
          title="添加分类"
          visible={showModal}
          onOk={handleOk}
          onCancel={handleCancel}
      >
        <FormComponent ref={formRef} setAllPostData = {setAllPostData}/>
      </Modal>
    </>
  )
}

export default ModalComponent