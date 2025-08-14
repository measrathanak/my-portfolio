<template>
  <section class="mt-32" id="contact">
    <SectionHeader title="Contact Me" />
    <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
<<<<<<< HEAD
      <div class="bg-white shadow-lg rounded-xl p-8 border border-gray-100">
        <form class="space-y-8">
          <div v-for="(item, index) in inputs" :key="index">
            <Input
              :id="item.id"
              :label="item.label"
              :type="item.type"
              :placeholder="item.placeholder"
              :rows="item.rows"
            />
          </div>
          <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <Button label="Send" />
            <div class="flex justify-center space-x-5">
              <a href="" class="text-gray-600 hover:text-blue-500 transition">
                <Icon icon="fa-brands:twitter" style="font-size: 2rem" />
              </a>
              <a href="" class="text-gray-600 hover:text-blue-700 transition">
                <Icon icon="fa-brands:linkedin" style="font-size: 2rem" />
              </a>
              <a href="" class="text-gray-600 hover:text-gray-800 transition">
                <Icon icon="fa-brands:github" style="font-size: 2rem" />
              </a>
              <a href="" class="text-gray-600 hover:text-pink-500 transition">
                <Icon icon="fa-brands:instagram" style="font-size: 2rem" />
              </a>
            </div>
          </div>
        </form>
      </div>
=======
      <form class="space-y-8">
        <div v-for="(item, index) in inputs" :key="index">
          <Input
            :id="item.id"
            :label="item.label"
            :type="item.type"
            :placeholder="item.placeholder"
            :rows="item.rows"
          />
        </div>
        <div class="flex justify-between">
          <Button label="Send" />

          <div class="mt-2 flex justify-center space-x-3 md:space-x-8">
            <a href="" class="text-gray-600 hover:text-blue-500">
              <Icon icon="fa-brands:twitter" style="font-size: 2rem" />
            </a>

            <a href="" class="text-gray-600 hover:text-blue-700">
              <Icon icon="fa-brands:linkedin" style="font-size: 2rem" />
            </a>

            <a href="" class="text-gray-600 hover:text-gray-800">
              <Icon icon="fa-brands:github" style="font-size: 2rem" />
            </a>

            <a href="" class="text-gray-600 hover:text-pink-500">
              <Icon icon="fa-brands:instagram" style="font-size: 2rem" />
            </a>
          </div>
        </div>
      </form>
>>>>>>> 429be68bf473c3c4d35b7ee32ac1c11a5bc61b5a
    </div>
  </section>
</template>
<script setup>
import SectionHeader from '@/components/UI/SectionHeader.vue'
import Input from '@/components/UI/Input.vue'
import Button from '@/components/UI/CusButton.vue'
import { ref } from 'vue'

const inputs = ref([
  {
    id: 'email',
    label: 'Your email',
    type: 'email',
    placeholder: 'email@example.com',
    rows: undefined,
  },
  {
    id: 'subject',
    label: 'Subject',
    type: 'text',
    placeholder: 'Let us know how we can help you',
    rows: undefined,
  },
  {
    id: 'message',
    label: 'Message',
    type: 'textarea',
    placeholder: 'Leave a comment',
    rows: 6,
  },
])
<<<<<<< HEAD
</script>
=======
</script>
>>>>>>> 429be68bf473c3c4d35b7ee32ac1c11a5bc61b5a
