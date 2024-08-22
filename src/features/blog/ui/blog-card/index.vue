<template>
  <div :class="styles.card">
    <span v-if="hasError" :class="styles.error">
      <SearchListIcon />
      Не удалось загрузить ...
    </span>
    <img
      v-else
      :class="styles.img"
      :src="props.post.image"
      :alt="props.post.title"
      @error="hasError = true"
    />

    <div :class="styles.info">
      <span>{{ prepareDate(props.post.createdAt) }}</span>
      <span>•</span>
      <span :class="styles.field">
        <ClockIcon />
        2 мин
      </span>
      <span>•</span>
      <span>
        <CommentsIcon />
        {{ formatPluralWord(props.post.reactions.likes, plural) }}
      </span>
    </div>

    <h3 :class="styles.title">{{ props.post.title }}</h3>
    <span :class="styles.description">{{ props.post.body }}</span>
    <div :class="styles.tags">
      <Chip
        v-for="tag of props.post.tags"
        :text="tag.text"
        :value="tag.value"
        readonly
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { type BlogCard } from '../../model';
import { prepareDate } from 'shared/utils/date';
import { formatPluralWord } from 'shared/utils/strings';

import { Chip } from 'shared/ui';
import SearchListIcon from 'shared/assets/icons/search-list.svg';
import ClockIcon from 'shared/assets/icons/clock.svg';
import CommentsIcon from 'shared/assets/icons/comments.svg';

import styles from './styles.module.css';

const props = defineProps<{ post: BlogCard }>();
const hasError = ref<boolean>(false);

const plural = ['лайк', 'лайка', 'лайков'];
</script>
