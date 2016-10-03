<template>

  <!-- 这里是页面内容区 -->

  <div transition="app">
    <tab-bar
      :tabs.sync="tabs">
      <div slot="bar-left">
        <button class="button pull-left">
          Left
        </button>
      </div>
    </tab-bar>

    <search-input :model="name" :enter="keyup"></search-input>

    <div class="content">
        <!-- <btn-group :groups.sync="groups"></btn-group> -->
        <v-form>
          <div slot="form">
            <text-input :model.sync="name" :keyup="changed" label="姓名"></text-input>
            <switch :on="true" :changed="changed"></switch>
            <text-area :model="fuck" :changed="changed"></text-area>
            <calendar id="birthday" :changed="calendarOnChange" label="生日"></calendar>
            <picker label="手机" id="phone" model="fuck fuck" :cols.sync="pickerCols"></picker>
            <datetime-picker label="时间" id="timepicker"></datetime-picker>
          </div>
          <div slot="footer">
            <div class="content-block">
              <div class="row">
                <div class="col-50">
                  <btn label="取消" :big="true" :danger="true" :fill="true" :rounded="false"></btn>        
                </div>
                <div class="col-50">
                  <btn label="确认" :big="true" :success="true" :fill="true" :rounded="false"></btn>
                </div>
              </div>
            </div>
          </div>
        </v-form>

        <icon icon="app"></icon>
        <icon icon="card"></icon>
        <icon icon="cart"></icon>
        <icon icon="star"></icon>

        <light-search-input></light-search-input>

        <light-search-input 
          :row="true" 
          :button-visible="true"
          input-col="80"
          btn-col="20"
          :model="name"
          :search-btn-clicked="changed">
        </light-search-input>

        <light-search-input 
          :row="true" 
          :button-visible="true"
          input-col="85"
          btn-col="15"
          :model="name"
          :search-btn-clicked="changed"
          :use-btn-icon="true">
        </light-search-input>

        <p>
          <btn></btn>
        </p>

        <p>
          <btn label="light button" :light="true"></btn>
        </p>

        <p>
          <btn label="disabled" :disabled="true"></btn>
        </p>

        <p>
          <btn label="success" :success="true" :rounded="true"></btn>
        </p>

        <p>
          <btn label="warning" :warning="true"></btn>
        </p>

        <p>
          <btn label="danger" :danger="true"></btn>
        </p>

        <p>
          <btn label="rounded" :fill="true" :rounded="true"></btn>
        </p>

        <p>
          <btn :big="true"></btn>
        </p>
    </div>
  </div>

</template>

<script>

import TabBar from './ui/TitleBar/TabBar.vue';
import Bar from './ui/Bar/Bar.vue';

import Btn from './ui/Button/Button.vue';
import BtnGroup from './ui/Button/ButtonGroup.vue';

import Inputer from './ui/Form/Input.vue';
import TextInput from './ui/Form/TextInput.vue';
import Switch from './ui/Form/Switch.vue';
import TextArea from './ui/Form/TextArea.vue';

import Calendar from './ui/Calendar/Calendar.vue';
import Picker from './ui/Calendar/Picker.vue';
import DatetimePicker from './ui/calendar/DatetimePicker';

import VForm from './ui/Form/VForm.vue';

import SearchInput from './ui/Search/SearchInput.vue';
import LightSearchInput from './ui/Search/LightSearchInput.vue';

import Tab from './ui/Tabs/Tab.vue';
import TabItem from './ui/Tabs/TabItem.vue';

import Icon from './ui/Icon/Icon.vue';

export default {
  data () {

    return {

      groups: [{
        label: 'shit 1',
        active: true
      }, {
        label: 'shit 2',
        active: false
      }],

      name: 'fuck',

      forms: [{
        type: 'text'
      }],

      tabs: [{
        active: true,
        label: 'Tab fuck',
        id: 'tab1'
      }, {
        active: false,
        label: 'Tab shit',
        id: 'tab2'
      }],

      tabItems: [{
        active: true,
        label: '文案',
        badge: false
      }, {
        active: false,
        label: '文案',
        badge: 10,
        icon: 'icon-me'
      }, {
        active: false,
        label: '文案',
        badge: false,
        icon: 'icon-star'
      }],

      tabsHeader: [{
        active: true,
        label: 'shit',
        tab: 'tab3',
      }, {
        active: false,
        label: 'fuck',
        tab: 'tab4'
      }],

      pickerCols: [{
          textAlign: 'center',
          values: ['fuck', 'shit', 'bitch']
        },
        {
          textAlign: 'center',
          values: ['fuck', 'shit', 'bitch']
        },
      ],

      timeA: ['1985', '12', '04', '9', '34']

    }

  },

  ready() {
  },

  components: {
    Btn,
    BtnGroup,
    Inputer,
    TextInput,
    Switch,
    TextArea,
    VForm,
    SearchInput,
    LightSearchInput,
    Tab,
    TabItem,
    Calendar,
    Picker,
    DatetimePicker,
    Icon,
    TabBar,
    Bar
  },

  methods: {
    changed: function(on) {
      console.log('changed', on);
    },

    keyup: function(on) {
      console.log('Search keyup', on);
    },

    calendarOnChange: function(p, v, d) {
      console.log(p, v, d);
    }
  },

  events: {
    'buttonGroupClicked': function(item) {
      console.log(item);
    },

    'buttonClicked': function(el) {
      console.log('sss', el);
    }
  }
}

</script>

<style>


</style>
