import Vue from 'vue';

//Bar

import Bar from './components/ui/Bar/Bar';
import FooterBar from './components/ui/Bar/FooterBar';
import FooterSecondaryBar from './components/ui/Bar/FooterSecondaryBar';
import HeaderSecondaryBar from './components/ui/Bar/HeaderSecondaryBar';

Vue.component('Bar', Bar);
Vue.component('FooterBar', FooterBar);
Vue.component('FooterSecondaryBar', FooterSecondaryBar);
Vue.component('HeaderSecondaryBar', HeaderSecondaryBar);

//Button

import btn from './components/ui/Button/Button';
import BtnGroup from './components/ui/Button/ButtonGroup';
import Link from './components/ui/Button/Link';

Vue.component('btn', btn);
Vue.component('BtnGroup', BtnGroup);
Vue.component('Link', Link);

//Canlendar

import Calendar from './components/ui/Calendar/Calendar';
import DatetimePicker from './components/ui/Calendar/DatetimePicker';
import LinkCalendar from './components/ui/Calendar/LinkCalendar';
import Picker from './components/ui/Calendar/Picker';

Vue.component('Calendar', Calendar);
Vue.component('DatetimePicker', DatetimePicker);
Vue.component('LinkCalendar', LinkCalendar);
Vue.component('Picker', Picker);

//Card

import Card from './components/ui/Card/Card';
import CardContent from './components/ui/Card/CardContent';
import CardFooter from './components/ui/Card/CardFooter';
import CardHeader from './components/ui/Card/CardHeader';
import Cards from './components/ui/Card/Cards';

Vue.component('Card', Card);
Vue.component('CardContent', CardContent);
Vue.component('CardFooter', CardFooter);
Vue.component('CardHeader', CardHeader);
Vue.component('Cards', Cards);

//Form

import Form from './components/ui/Form/Form';
import Inputer from './components/ui/Form/Input';
import Switch from './components/ui/Form/Switch';
import TextArea from './components/ui/Form/TextArea';
import TextInput from './components/ui/Form/TextInput';
import VForm from './components/ui/Form/VForm';

Vue.component('Form', Form);
Vue.component('Inputer', Inputer);
Vue.component('Switch', Switch);
Vue.component('TextArea', TextArea);
Vue.component('TextInput', TextInput);
Vue.component('VForm', VForm);

//Grid

import Grid from './components/ui/Grid/Grid';
import GridRow from './components/ui/Grid/GridRow';

Vue.component('Grid', Grid);
Vue.component('GridRow', GridRow);

//Icon

import Icon from './components/ui/Icon/Icon';

Vue.component('Icon', Icon);

//Layout

import Page from './components/ui/layout/Page';

Vue.component('Page', Page);

//List

import BaseList from './components/ui/List/BaseList';
import CheckList from './components/ui/List/CheckList';
import ContactList from './components/ui/List/ContactList';
import List from './components/ui/List/List';
import ListItem from './components/ui/List/ListItem';
import ListTitle from './components/ui/List/ListTitle';
import MediaList from './components/ui/List/MediaList';
import RadioList from './components/ui/List/RadioList';

Vue.component('BaseList', BaseList);
Vue.component('CheckList', CheckList);
Vue.component('ContactList', ContactList);
Vue.component('List', List);
Vue.component('ListItem', ListItem);
Vue.component('ListTitle', ListTitle);
Vue.component('MediaList', MediaList);
Vue.component('RadioList', RadioList);

//Loader

import PullRefresh from './components/ui/Loader/PullRefresh';
import ScrollPreloader from './components/ui/Loader/ScrollPreloader';

Vue.component('PullRefresh', PullRefresh);
Vue.component('ScrollPreloader', ScrollPreloader);

//Panel

import Panel from './components/ui/Panel/Panel';

Vue.component('Panel', Panel);
window.Panel = Panel;

//Popup

import Popup from './components/ui/Popup/Popup';

Vue.component('Popup', Popup);

//Search

import LightSearchInput from './components/ui/Search/LightSearchInput';
import SearchInput from './components/ui/Search/SearchInput';

Vue.component('LightSearchInput', LightSearchInput);
Vue.component('SearchInput', SearchInput);

//Tabs

import Tab from './components/ui/Tabs/Tab';
import TabHeader from './components/ui/Tabs/TabHeader';
import TabItem from './components/ui/Tabs/TabItem';

Vue.component('Tab', Tab);
Vue.component('TabHeader', TabHeader);
Vue.component('TabItem', TabItem);

//TitleBar

import ButtonBar from './components/ui/TitleBar/ButtonBar';
import CommonBar from './components/ui/TitleBar/CommonBar';
import IconBar from './components/ui/TitleBar/IconBar';
import IconButtonBar from './components/ui/TitleBar/IconButtonBar';
import IconLinkBar from './components/ui/TitleBar/IconLinkBar';
import TabBar from './components/ui/TitleBar/TabBar';

Vue.component('ButtonBar', ButtonBar);
Vue.component('CommonBar', CommonBar);
Vue.component('IconBar', IconBar);
Vue.component('IconButtonBar', IconButtonBar);
Vue.component('IconLinkBar', IconLinkBar);
Vue.component('TabBar', TabBar);
