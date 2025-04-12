function Contact () {
return (
    <section id="contact" class="h-[800px] flex flex-col justify-center items-center">
    <h1 class="text-3xl font-bold mb-12">Connect with Me</h1>
    <p>If you're interested in discussing potential job <br/>opportunities, or just chatting about the world of computer science</p>


    <div class="flex gap-8">
    <button class="rounded-3xl bg-[#851010] w-[250px] h-[300px] mt-[40px] flex justify-center items-center gap-2">
        <a href="https://github.com/M1nkyLab">Github</a>
        </button>

        <button class="rounded-3xl bg-[#851010] w-[250px] h-[300px] mt-[40px] flex justify-center items-center ">
        <a href="https://www.linkedin.com/in/syed-farhan-haziq-886a41345/">Linkdln</a>
        </button>

        <button class="rounded-3xl bg-[#851010] w-[250px] h-[300px] mt-[40px] flex justify-center items-center ">
        <a href="mailto:farhaziq77@gmail.com">Email</a>
        </button>
    </div>
</section>
);
}

export default Contact;