import Vue from 'vue'
import Router from 'vue-router'
import store from '../store/index'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: '/',
      component: function (resolve) {
        require(['../components/loginRegister/Login.vue'], resolve)
      }
    },
    {
      path: '/SelectCompany',
      name: 'SelectCompany',
      component: function (resolve) {
        require(['../components/loginRegister/SelectCompany.vue'], resolve)
      }
    },
    {
      path: '/SelectMechanism',
      name: 'SelectMechanism',
      component: function (resolve) {
        require(['../components/loginRegister/SelectMechanism.vue'], resolve)
      }
    },
    {
      path: '/PersonalIndex',
      name: 'PersonalIndex',
      component: function (resolve) {
        require(['../components/personalCenter/PersonalIndex.vue'], resolve)
      }
    },
    {
      path: '/OfficeIndex',
      name: 'OfficeIndex',
      component: function (resolve) {
        require(['../components/officeCenter/OfficeIndex.vue'], resolve)
      }
    },
    {
      path: '/EssentialInfo',
      name: 'EssentialInfo',
      component: function (resolve) {
        require(['../components/personalCenter/EssentialInfo.vue'], resolve)
      }
    },
    {
      path: '/bgUpLoad',
      name: 'bgUpLoad',
      component: function (resolve) {
        require(['../components/personalCenter/bgUpLoad.vue'], resolve)
      }
    },
    {
      path: '/PersonalCertification',
      name: 'PersonalCertification',
      component: function (resolve) {
        require(['../components/personalCenter/PersonalCertification.vue'], resolve)
      }
    },
    {
      path: '/PersonalCLS',
      name: 'PersonalCLS',
      component: function (resolve) {
        require(['../components/personalCenter/PersonalCLS.vue'], resolve)
      }
    },
    {
      path: '/PersonalComplete',
      name: 'PersonalComplete',
      component: function (resolve) {
        require(['../components/personalCenter/PersonalComplete.vue'], resolve)
      }
    },
    {
      path: '/ModifyPwd',
      name: 'ModifyPwd',
      component: function (resolve) {
        require(['../components/personalCenter/ModifyPwd.vue'], resolve)
      }
    },
    {
      path: '/ModifyPhone',
      name: 'ModifyPhone',
      component: function (resolve) {
        require(['../components/personalCenter/ModifyPhone.vue'], resolve)
      }
    },
    {
      path: '/ModifyEmail',
      name: 'ModifyEmail',
      component: function (resolve) {
        require(['../components/personalCenter/ModifyEmail.vue'], resolve)
      }
    },
    {
      path: '/TheEnterprise',
      name: 'TheEnterprise',
      component: function (resolve) {
        require(['../components/personalCenter/TheEnterprise.vue'], resolve)
      }
    },
    {
      path: '/OfficeDetails',
      name: 'OfficeDetails',
      component: function (resolve) {
        require(['../components/officeCenter/OfficeDetails.vue'], resolve)
      }
    },
    {
      path: '/officeHall',
      name: 'officeHall',
      component: function (resolve) {
        require(['../components/officeHall/officeHall.vue'], resolve)
      }
    },
    {
      path: '/officeHallKinds',
      name: 'officeHallKinds',
      component: function (resolve) {
        require(['../components/officeHall/officeHallKinds.vue'], resolve)
      }
    },
    {
      path: '/proExamine',
      name: 'proExamine',
      component: function (resolve) {
        require(['../components/officeHall/proExamine.vue'], resolve)
      }
    },
    {
      path: '/examineGuide',
      name: 'examineGuide',
      component: function (resolve) {
        require(['../components/officeHall/examineGuide.vue'], resolve)
      }
    },
  ]
});

router.beforeEach(function (to, from, next) {
  store.commit('UPDATE_LOADING_STATUS', {isLoading: true});
  next();
});

router.afterEach(function (to) {
    setTimeout( () => {
      store.commit('UPDATE_LOADING_STATUS', {isLoading: false})
    },500)
});

export default router;
