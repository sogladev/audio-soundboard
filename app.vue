
<template>
  <div>
    <div className="mt-12 flex flex-wrap justify-center">
    <NavBar></NavBar>
    <h1 class="description text-xl mx-0 my-4 p-4 border-2 text-center">
      Click to test stereo audio
    </h1>
      <SoundBox text="Left" id="left-audio" />
      <SoundBox text="Right" id="right-audio" />
    </div>
      <AudioComponent></AudioComponent>
  </div>
</template>
