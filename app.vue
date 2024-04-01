
<template>
  <div>
    <h1>hello world</h1>
    <div className="mt-12 flex flex-wrap justify-center">
    <NavBar></NavBar>
      <SoundBox text="Left" id="left-audio" />
      <SoundBox text="Right" id="right-audio" />
    </div>
      <AudioComponent></AudioComponent>
  </div>
</template>
