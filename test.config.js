/** Used in jest.config.js */
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import * as polyfills from '@babel/polyfill';

configure({ adapter: new Adapter() });
