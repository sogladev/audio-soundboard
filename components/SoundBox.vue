<script lang="ts" setup>
const props = defineProps({
    text: String,
    id: String,
})

const isPlaying = ref(false);

function onClick() {
    if (props.id == undefined) {
        return;
    }
    const track = document.getElementById(props.id) as HTMLAudioElement | null
    if (!track) {
        return;
    }

    track.currentTime = 0;

    track.addEventListener("ended", () => {
        isPlaying.value = false;
        return;
    }, { once: true });

    track.play();
    isPlaying.value = true;
};
</script>

<template>
    <div className="mt-3">
        <button @click="onClick"
            class="bg-emerald-600 hover:bg-emerald-700 transition py-16 mr-3 px-14 rounded w-64 border-b-4"
            :class="{ 'border-emerald-600': isPlaying }">
            {{ text }}
        </button>
    </div>
</template>