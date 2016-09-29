<template>

  <!-- 这里是页面内容区 -->
  <div class="page-index">
      <btn-group :groups.sync="groups"></btn-group>

      <v-form :forms.sync="forms">
        <div slot="form">
          <text-input :model.sync="name" :keyup="changed" label="姓名"></text-input>
          <switch :on="true" :changed="changed"></switch>
          <text-area :model="fuck" :changed="changed"></text-area>
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

</template>

<script>

import Btn from './ui/Button/Button.vue';
import BtnGroup from './ui/Button/ButtonGroup.vue';

import Inputer from './ui/Form/Input.vue';
import TextInput from './ui/Form/TextInput.vue';
import Switch from './ui/Form/Switch.vue';
import TextArea from './ui/Form/TextArea.vue';

import VForm from './ui/Form/VForm.vue';

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
      }]
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
    VForm
  },

  methods: {
    changed: function(on) {
      console.log('changed', on);
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
