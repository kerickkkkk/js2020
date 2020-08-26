<template>
  <div>
    <form
      class="form-signin"
      @submit.prevent="signin"
    >
      <h1 class="h3 mb-3 font-weight-normal">
        請登入
      </h1>
      <label
        for="inputEmail"
        class="sr-only"
      >請填入信箱</label>
      <input
        id="inputEmail"
        v-model="user.email"
        type="email"
        class="form-control"
        placeholder="請填入信箱"
        required=""
        autofocus=""
      >
      <label
        for="inputPassword"
        class="sr-only"
      >請填入密碼</label>
      <input
        id="inputPassword"
        v-model="user.password"
        type="password"
        class="form-control"
        placeholder="請填入密碼"
        required=""
      >
      <!-- <div class="checkbox mb-3">
            <label>
                <input type="checkbox" value="remember-me"> Remember me
            </label>
        </div> -->
      <button
        class="btn btn-lg btn-primary btn-block"
        type="submit"
      >
        登入
      </button>
      <p class="mt-5 mb-3 text-muted">
        © 2018-2020
      </p>
    </form>
  </div>
</template>
<script >
export default {
  name: 'Login',
  data () {
    return {
      user: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    signin () {
      console.log(this.$http)
      const apiSingup = `${process.env.VUE_APP_APIPATH}/auth/login`
      console.log(apiSingup)
      this.$http.post(apiSingup, this.user)
        .then(({ data }) => {
          console.log('signin', data)
          const { token, expired } = data
          // token名稱 = ${token}
          // 進入頁面需要認證取出這個名稱
          document.cookie = `token=${token}; expires=${new Date(expired * 1000)}; path=/`
          this.$router.push('/admin/products')
        }).catch(error => console.log(error))
    }
  }
}
</script>
<style lang="scss" scoped>
        html,
        body {
            height: 100%;
        }

        body {
            display: -ms-flexbox;
            display: flex;
            -ms-flex-align: center;
            align-items: center;
            padding-top: 40px;
            padding-bottom: 40px;
            background-color: #f5f5f5;
        }

        .form-signin {
            width: 100%;
            max-width: 330px;
            padding: 15px;
            margin: auto;
        }

        .form-signin .checkbox {
            font-weight: 400;
        }

        .form-signin .form-control {
            position: relative;
            box-sizing: border-box;
            height: auto;
            padding: 10px;
            font-size: 16px;
        }

        .form-signin .form-control:focus {
            z-index: 2;
        }

        .form-signin input[type="email"] {
            margin-bottom: -1px;
            border-bottom-right-radius: 0;
            border-bottom-left-radius: 0;
        }

        .form-signin input[type="password"] {
            margin-bottom: 10px;
            border-top-left-radius: 0;
            border-top-right-radius: 0;
        }
    </style>
