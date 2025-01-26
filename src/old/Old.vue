<template>
  <div class="flex flex-col items-center justify-content-start">
    <div :class="'flex-col ' + (currentRoute === 'home' ? 'max-w-[1120px] w-full' : 'w-full')">

      <Header />

      <div class="w-full border border-slate rounded-md p-12 bg-[#3D425B] radial-bg">
        <h2 class="text-2xl text-light-grey font-semibold">
          How does Menelmacar work?
        </h2>
        <p class="pt-2 pb-4 font-normal text-light-grey max-w-[60%]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec iaculis, ante eu sagittis aliquet, sapien diam
          gravida nunc, sed imperdiet tellus risus eu est. Integer iaculis augue ac ultricies rutrum.
          <br>
          <a href="" class="pt-4 inline-block text-azure">View bio models &raquo;</a>
        </p>
        <ModelSelect />

<!--        <div id="model_input">-->
<!--          <input type="text" v-model="path" placeholder="Enter the model name" @keydown="clearModel(false)"-->
<!--                 @keydown.enter="loadModel" @keydown.delete="clearModel(false)">-->
<!--          <select v-model="path" @change="loadModel">-->
<!--            <option v-for="model in file_names" :key="model" :value="model">{{ model }}</option>-->
<!--          </select>-->
<!--          <button v-if="!model_loaded" @click="loadModel" id="loadModel">Load model</button>-->
<!--          <button v-if="model_loaded" @click="clearModel(true)" id="clearModel">Clear model</button>-->
<!--          <div id="exampleModels">-->
<!--            <text>Example models:</text>-->
<!--            <button class="exampleModel" @click="path = 'BIOMD0000000982'; loadModel()">BIOMD0000000982</button>-->
<!--            <button class="exampleModel" @click="path = 'BIOMD0000000012'; loadModel()">BIOMD0000000012</button>-->
<!--          </div>-->
<!--        </div>-->
        <!-- Load the model only if its ID is in the public folder -->
        <div v-if="model_loaded && file_names.includes(path)">
          <h2 style="font-size: 12pt;">Model: {{ path }}</h2>
        </div>
<!--        <div v-else-if="no_model">-->
<!--          <h2>No model is loaded</h2>-->
<!--        </div>-->
<!--        <div v-else>-->
<!--          <h2>Model not found</h2>-->
<!--        </div>-->
      </div>

      <div id="model_viewer" v-if="model_loaded && file_names.includes(path)">
        <ModelViewer :path="path" :key="path" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import ModelViewer from './ModelViewer.vue'
import Header from '@/components/layout/Header.vue'
import ModelSelect from '@/components/ModelSelect.vue'

export default defineComponent({
  name: 'App',

  components: {
    ModelSelect,
    Header,
    ModelViewer
  },

  computed: {
    currentRoute() {
      return this.$route.name
    }
  },

  data() {
    return {
      file_names: []
    }
  },

  mounted() {
    this.extractFileNames().then(() => {
      let model = this.$route.params.modelId

      if (model) {
        this.path = model
        this.loadModel()
      }
    })
  },

  setup() {
    const path = ref('')
    const model_loaded = ref(false)
    const no_model = ref(true)

    return {
      path,
      model_loaded,
      no_model
    }
  },

  methods: {
    loadModel() {
      if (this.file_names.includes(this.path)) {
        this.$router.push(`/view/${this.path}`)
        this.model_loaded = true
        this.no_model = true
      } else {
        this.no_model = false
      }
    },

    clearModel(clear_path) {
      this.model_loaded = false
      if (clear_path) {
        this.path = ''
      }
      this.$router.push(`/`)
    },

    // Open the file containing the names of the models and extract them into a list
    async extractFileNames() {
      console.log('Extracting file names')

      try {
        const response = await fetch('/models/file_names.txt')
        if (response.ok) {
          const fileContent = await response.text()
          this.file_names = fileContent
            .split('\n')
            .slice(0, -1)
            .map(file => file.split('\r').at(0))
        } else {
          console.error('Failed to load file')
        }
      } catch (error) {
        console.error('Error fetching file:', error)
      }
    }
  }
})
</script>

<style lang="scss">
#appContainer {
  display: flex;
  flex-direction: column;
  height: 90vh;
  box-sizing: border-box;
  min-height: 500px;
  min-width: 500px;
}

#Header {
  display: flex;
  align-items: center;
  justify-content: center;
}

#logo {
  position: absolute;
  left: 5px;
  top: 5px;
  height: 100px;
  width: fit-content;
}

#title {
  text-align: center;
  font-size: 50px;
  margin: 0;
}

h1 {
  text-align: center;
  font-size: 50px;
}

#loadModel {
  background-color: lightblue;
  border-width: 1px;
  height: 20.86px;
}

#loadModel:hover {
  background-color: lightcyan;
  cursor: pointer;
}

#clearModel {
  background-color: lightcoral;
  border-width: 1px;
  height: 20.86px;
}

#clearModel:hover {
  background-color: lightpink;
  cursor: pointer;
}

.exampleModel {
  margin: 0 2px;
  background-color: #f5f5f5;
  border: 0;
  font-size: 8pt;
}

.exampleModel:hover {
  background-color: #e5e5e5;
  cursor: pointer;
}

#chooseModel {
  display: flex;
  align-items: center;
  justify-content: center;
}

h2 {
  margin-left: 20px;
}

#model_viewer {
  width: 100%;
  flex-grow: 1;
  padding: 0 20px;
  box-sizing: border-box;
}

.radial-bg {
  background: radial-gradient(27.5% 102.53% at 91.52% 91.79%, #613A66 0%, rgba(61, 66, 91, 0) 100%), radial-gradient(52.57% 116.28% at 54.78% 92.44%, #51757A 0%, rgba(61, 66, 91, 0) 100%), radial-gradient(28.86% 74.9% at 13.39% 100%, #735A30 0%, rgba(61, 66, 91, 0) 100%);
}
</style>
