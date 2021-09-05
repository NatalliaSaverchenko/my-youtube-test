import { Form,Input,Button,Select,Slider } from 'antd';
import { useMemo } from 'react';

const FavoritesForm=({ initialValues,onCancel,onSubmit,editMode=false })=>{
  const buttonTexts=useMemo(()=>{return editMode?{ cancelBtn:'Не изменять',okBtn:'Изменить' }:{ cancelBtn:'Не cохранять',okBtn:'Сохранить' };},[editMode]);
  return(
    <Form
      name="saveForm"
      id="saveForm"
      onFinish={onSubmit}
      initialValues={initialValues}
      preserve={false}
      // {
      //   query:'',
      //   title:'',
      //   sortBy: '',
      //   maxCount:12,
      // }
    >
      <Form.Item
        name='query'
        label='Запрос'
      >
        <Input disabled={!editMode}/>
      </Form.Item>

      <Form.Item
        name='title'
        label='Название'
      >
        <Input placeholder='Укажите название'/>
      </Form.Item>

      <Form.Item
        name='order'
        label='Сортировать по'
        hasFeedback
        rules={[{ required:true,message:'Сортировать по ...' }]}
      >
        <Select placeholder='Без сортировки'>
          <Select.Option value='date'>дате</Select.Option>
          <Select.Option value='raiting'>рейтингу</Select.Option>
          <Select.Option value='relevance'>релевантности</Select.Option>
          <Select.Option value='title'>названию</Select.Option>
          <Select.Option value='videoCount'>videoCount</Select.Option>
          <Select.Option value='viewCount'>количеству</Select.Option>
        </Select>

      </Form.Item>
      <Form.Item name='resultsPerPage'>
        <Slider
          min={12}
          max={50}/>
      </Form.Item>
      <Button onClick={onCancel}>{buttonTexts.cancelBtn}</Button>
      <Button
        htmlType='submit'
        type='primary'
      >
        {buttonTexts.okBtn}
      </Button>
    </Form>

  );
};
export default FavoritesForm;
