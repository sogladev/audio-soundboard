
<template>
  <div>
    <NavBar></NavBar>
    <h1 class="description text-xl mx-0 my-4 p-4 border-2 text-center">
      Click to test stereo audio
    </h1>
    <div class="mt-4 flex justify-between space-x-4">
      <SoundBox text="Left" id="left-audio" />
      <SoundBox text="Right" id="right-audio" />
    </div>
      <AudioComponent></AudioComponent>
  </div>
</template>
