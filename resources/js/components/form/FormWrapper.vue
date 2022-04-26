<template>
  <div class="md:grid md:grid-cols-3 md:gap-6">
    <section-title>
      <template #title>
        <slot name="title" />
      </template>
      <template #description>
        <slot name="description" />
      </template>
    </section-title>

    <slot name="content" />
  </div>
</template>
