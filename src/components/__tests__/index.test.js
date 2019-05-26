import enzyme from 'enzyme';
import configureStore from 'redux-mock-store';
import React from 'react';
import {Provider} from 'react-redux';
import moxios from 'moxios';
import NavBar, {Nav} from '../NavBar';
import App from '../App';
import action from '../../redux/actions';
import {reducer} from '../../redux/reducers';
import API from '../../services/api';

const {add} = action;
const { mount } = enzyme;

describe('test', () => {
  const initialState = {};
  const mockStore = configureStore();
  const store = mockStore(initialState);
  it('passes', () => {
    const wrapper = mount(<App />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders nav bar', () => {
    const wrapper = mount(
      <Provider store={store}>
        <NavBar />
      </Provider>
    );
  });

  it('passes', () => {
    const wrapper = mount(
      <Nav />
    );
    const button = wrapper.find('button');
    expect(button.length).toEqual(1);
    button.simulate('click');
  });

  it('tests the API', async () => {
    moxios.stubRequest('https://jsonplaceholder.typicode.com/todos/1', {
      status: 200,
      response: {
        message: 'Success',
        user: ''
      }
    });
    const {response} = await API.fetchAll();
    expect(response.status).toEqual(200);
  });

  it('pss', () => {
    expect(add(5,5)).toEqual(10);
    expect(add(4,5)).toEqual(5);
    expect(add(6,5)).toEqual(6);
    reducer({}, {type: 'TYPE'});
  });
});
