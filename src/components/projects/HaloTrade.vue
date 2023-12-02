<script>
import feather from 'feather-icons';

export default {
    props: ['projectInfo'],

    mounted() {
        feather.replace();
    },
    updated() {
        feather.replace();
    },
};
</script>

<template>
    <div class="mt-14 bg-neutral-950">
        <div
            class="bg-[url('@/assets/images/halo/bg-1.png')] bg-auto bg-center h-screen"
        >
            <div class="p-24 grid place-items-center">
                <p
                    class="text-7xl bold text-transparent bg-clip-text text-gradient bg-gradient-to-r from-lime-500 to-emerald-500"
                >
                    HALLOTRADE
                </p>
                <img
                    src="@/assets/images/halo/s1-item1.png"
                    class="rounded-xl cursor-pointer w-2/5 mt-12"
                    alt="bg"
                />
                <img
                    src="@/assets/images/halo/s1-item2.png"
                    class="absolute z-99 rounded-xl cursor-pointer mt-32"
                    alt="bg"
                />
            </div>
        </div>
		<div class="bg-[url('@/assets/images/halo/s2-shape.png')]">
			<div class="mx-auto flex px-[138px] py-[67px]">
				<div
					class="relative w-1/2 flex flex-col place-items-center"
				>
					<img
						src="@/assets/images/halo/s2-mascot.png"
						class="rounded-xl cursor-pointer"
						alt="bg"
					/>
					<div
						class="text-lime-400 text-5xl font-semibold font-['Jost'] leading-10 tracking-widest before:content-['Introduction'] before:absolute before:top-0 before:left-0 before:opacity-60 before:text-lime-400 before:text-5xl before:blur-sm before:font-semibold before:leading-10 before:tracking-widest relative"
					>
						Introduction
					</div>
				</div>
				<div
					style="
						background: linear-gradient(
							180deg,
							rgba(241, 255, 231, 0.05) 0%,
							rgba(241, 255, 231, 0.02) 100%
						);
						backdrop-filter: blur(6px);
					"
					class="flex flex-col justify-between h-72 px-10 w-1/2 rounded-2xl"
				>
				<div class="h-px bg-gradient-to-l from-lime-500 from-1% via-lime-500 via-70% to-lime-500 to-5% rounded-xl"></div>
					<div class="text-left">
						<span class="text-stone-200 text-xl font-semibold leading-9"
							>HaloTrade</span
						>
						<span class="text-stone-200 text-xl font-normal leading-9">
						</span>
						<span class="text-zinc-400 text-xl font-normal leading-9">
							is DeFi Trading Platform on the Aura Network blockchain.
							The goal of this project is to deliver a scalable Design
							System for DeFi Trading Platform</span
						>
					</div>
					<div class="flex items-center space-x-4 mt-4">
						<div class="text-white text-xs font-semibold uppercase leading-none">stake</div>
							<img
								src="@/assets/icons/figma.svg"
								class="w-20 ml-4"
								alt="Light Logo"
								/>
							<img
								src="@/assets/icons/web3.svg"
								class="w-18 ml-4"
								alt="Light Logo"
								/>
							<div class="h-8 border border-neutral-500"></div>
							<div class="text-white text-xs font-semibold uppercase leading-none">Client</div>
							<img
								src="@/assets/icons/aura.svg"
								class="w-24 ml-4"
								alt="Light Logo"
							/>
					</div>
					<div class="h-px rotate-180 bg-gradient-to-l from-lime-500 via-lime-500 to-lime-500 rounded-xl"></div>
				</div>
			</div>
			<div
				class="mt-16 text-lime-400 text-5xl text-center font-semibold font-['Jost'] leading-10 tracking-widest before:content-['Aura_Ecosystem'] before:text-center before:absolute before:opacity-60 before:text-lime-400 before:text-5xl before:blur-sm before:font-semibold before:leading-10 before:tracking-widest relative"
			>
			Aura Ecosystem
			</div>
			<div class="mt-12 flex flex-col justify-around items-center">
				<div>
					<img
						src="@/assets/images/halo/s2-eco-1.png"
						alt="item"
						/>
				</div>
				<div class="flex flex-row justify-between items-center gap-32 p-24">
					<img
						src="@/assets/images/halo/s2-eco-2.png"
						alt="item"
						class="w-[84px] h-[84px]"
					/>
					<img
						src="@/assets/images/halo/s2-eco-3.png"
						alt="item"
					/>
					<img
						src="@/assets/images/halo/s2-eco-4.png"
						alt="item"
					/>
					<img
						src="@/assets/images/halo/s2-eco-5.png"
						alt="item"
						class="w-[84px] h-[84px]"
					/>
				</div>	
				<div class="flex flex-row gap-[32em]">
					<img
						src="@/assets/images/halo/s2-eco-6.png"
						alt="item"
					/>
					<img
					src="@/assets/images/halo/s2-eco-7.png"
					alt="item"
				/>
				</div>
			</div>
			<div
				class="p-28 text-lime-400 text-5xl font-semibold font-['Jost'] leading-10 tracking-widest before:content-['My_responsibilities'] before:p-28 before:absolute before:top-0 before:left-0 before:opacity-60 before:text-lime-400 before:text-5xl before:blur-sm before:font-semibold before:leading-10 before:tracking-widest relative"
			>
			My responsibilities
			</div>
			<img
				src="@/assets/images/halo/s3-mascot.png"
				alt="Light Logo"
				/>
		</div>
        <!-- Single project right section details -->
        <div class="w-full sm:w-2/3 text-left mt-10 sm:mt-0"></div>
    </div>
</template>
