

function Tools() {
return (
    <section id="tools" class="h-screen flex flex-col justify-center items-center">
    <h1 class="text-3xl font-bold text-center">Tools</h1>
    <div class="overflow-x-hidden w-full group">
        <div class="flex space-x-16 w-[200%]">
        <div class="flex space-x-16 animate-loop-scroll mt-[70px]">

            <img src="https://picsum.photos/seed/pic1/150" alt="Tool 1" />
            <img src="https://picsum.photos/seed/pic2/150" alt="Tool 2" />
            <img src="https://picsum.photos/seed/pic3/150" alt="Tool 3" />
            <img src="https://picsum.photos/seed/pic4/150" alt="Tool 4" />
            <img src="https://picsum.photos/seed/pic5/150" alt="Tool 5" />
        </div>
        <div class="flex space-x-16 animate-loop-scroll mt-[70px] aria-hidden group-hover:visible">

            <img src="https://picsum.photos/seed/pic1/150" alt="" />
            <img src="https://picsum.photos/seed/pic2/150" alt="" />
            <img src="https://picsum.photos/seed/pic3/150" alt="" />
            <img src="https://picsum.photos/seed/pic4/150" alt="" />
            <img src="https://picsum.photos/seed/pic5/150" alt="" />
        </div>
        </div>
    </div>
    </section>
);
}

export default Tools;