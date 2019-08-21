import angular from 'angular';
import Navbar from './navbar/navbar';
import StreamBar from './streamBar/streamBar';
import SelectCard from './selectCard/selectCard';
import MenuTabRight from './MenuTabRight/MenuTabRight';
import NiceSelect from './niceSelect/niceSelect';
import StraightTable from './straightTable/straightTable';


let commonModule = angular.module('app.common', [
  Navbar,
  StreamBar,
  SelectCard,
  MenuTabRight,
  NiceSelect,
  StraightTable
])

  .name;

export default commonModule;
