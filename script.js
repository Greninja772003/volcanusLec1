var tl = gsap.timeline()
tl.from(".left, .mid a,  .b1, .b2",{
    y:-355,
    duration: 1,
    // delay:1,
    stagger:.5,
    opacity:0
})
tl.from(".text, .option",{
    opacity:0,
    duration:1,
    delay:.5,
    stagger:1
})
tl.from(".filter",{
    y:100,
    // delay:1,
    duration:1
})

tl.from(".handles",{
    y:100,
    // delay:1,
    duration:1
})
tl.from(".image1,.image2,.image3,.image4",{
    opacity:0,
    // delay:1,
    // stagger:.2,
    duration:1
})
tl.from(".way",{
    y:20,
    opacity:0,
    repeat:-1,
    delay:2,
    duration:1,
    yoyo:true
})