import {createContext} from 'react';
import {Dependencies} from './Dependencies';

export const sharedDependencies = new Dependencies();
const DependencyContext = createContext(sharedDependencies);
export default DependencyContext;
