'use strict';
var ahApp = angular.module('ahApp', ['ngRoute', 'jtt_instagram']);

ahApp.directive('sidebar', function() {
	return {
		templateUrl: '/pages/sidebar.html'
	};
});
ahApp.directive('navbar', function() {
	return {
		templateUrl: '/pages/navbar.html'
	};
});
ahApp.constant("employeeData", [
    {
        name: "Kim",
        store: "Damariscotta",
        role: "",
        image: "kim.png",
        blurb: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
    },
    {
        name: "Becca",
        store: "Damariscotta",
        role: "",
        image: "",
        blurb: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
    },
    {
        name: "Victoria",
        store: "Damariscotta",
        role: "",
        image: "",
        blurb: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
    },
    {
        name: "Heather",
        store: "Damariscotta",
        role: "",
        image: "",
        blurb: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
    },
    {
        name: "Ivy",
        store: "Damariscotta",
        role: "",
        image: "",
        blurb: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
    },
    {
        name: "Donna",
        store: "Westbrook",
        role: "",
        image: "",
        blurb: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
    },
    {
        name: "David",
        store: "Westbrook",
        role: "",
        image: "",
        blurb: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
    },
    {
        name: "Sarah",
        store: "Westbrook",
        role: "",
        image: "",
        blurb: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
    },
    {
        name: "Tonya",
        store: "Westbrook",
        role: "",
        image: "",
        blurb: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
    },
]);
ahApp.constant("brandData", [
    {
        "name":"Conair Corporation",
        "url":"http://www.conairpet.com/"
    },
    {
        "name":"Precious Cat, Inc.",
        "url":"https://www.drelseys.com/"
    },
    {
        "name":"M2 Products Llc",
        "url":""
    },
    {
        "name":"Idea Factory",
        "url":"http://www.rinseace.com/dog-showers"
    },
    {
        "name":"T F H Publication",
        "url":"http://www.tfh.com/"
    },
    {
        "name":"Cat Dancer Products Inc.",
        "url":"http://www.catdancer.com/"
    },
    {
        "name":"Fe-lines, Inc.",
        "url":"http://www.stickypaws.com"
    },
    {
        "name":"Farnam Pet",
        "url":"https://www.farnam.com/"
    },
    {
        "name":"Naturvet",
        "url":"https://naturvet.com/"
    },
    {
        "name":"Ark Naturals",
        "url":"https://www.arknaturals.com/"
    },
    {
        "name":"Synergy Labs",
        "url":"http://synergylabs.com/"
    },
    {
        "name":"Greenies",
        "url":"https://www.greenies.com/"
    },
    {
        "name":"Grizzly Pet Products, Llc",
        "url":"http://www.grizzlypetproducts.com/"
    },
    {
        "name":"Halo, Purely for Pets",
        "url":"https://halopets.com/"
    },
    {
        "name":"Earthbath",
        "url":"https://earthbath.com/"
    },
    {
        "name":"Tropiclean",
        "url":"http://tropiclean.com/"
    },
    {
        "name":"Grannick's Bitter Apple Co",
        "url":"http://www.bitterapple.com/"
    },
    {
        "name":"Lupine",
        "url":"https://www.lupinepet.com/"
    },
    {
        "name":"Midwestern Pet Foods, Inc",
        "url":""
    },
    {
        "name":"Bamboo",
        "url":""
    },
    {
        "name":"Nature's Variety",
        "url":"https://www.naturesvariety.com/"
    },
    {
        "name":"Wellpet Llc",
        "url":"http://www.wellpet.com/index.aspx"
    },
    {
        "name":"Diamond Pet Foods",
        "url":"https://www.diamondpet.com/"
    },
    {
        "name":"Primal Pet Foods",
        "url":"https://primalpetfoods.com/"
    },
    {
        "name":"Dogswell, Llc",
        "url":"http://www.dogswell.com/"
    },
    {
        "name":"Grandma Lucy's",
        "url":"https://www.grandmalucys.com/"
    },
    {
        "name":"Weruva",
        "url":"http://www.weruva.com/"
    },
    {
        "name":"Fromm Family Foods Llc",
        "url":"https://frommfamily.com/"
    },
    {
        "name":"Evangers",
        "url":"https://evangersdogfood.com/"
    },
    {
        "name":"Swheat Scoop",
        "url":"https://www.swheatscoop.com/"
    },
    {
        "name":"Arm & Hammer",
        "url":""
    },
    {
        "name":"Ruff Dawg",
        "url":""
    },
    {
        "name":"The Real Meat Co",
        "url":"http://www.realmeatpet.com/"
    },
    {
        "name":"N-bone",
        "url":""
    },
    {
        "name":"Canine Hardware",
        "url":""
    },
    {
        "name":"Nylabone",
        "url":""
    },
    {
        "name":"Starmark",
        "url":""
    },
    {
        "name":"Proctor & Gamble",
        "url":""
    },
    {
        "name":"Pawz Dog Boots Llc",
        "url":""
    },
    {
        "name":"Homeopet, Llc",
        "url":""
    },
    {
        "name":"Xynyth Manufacturing Corp",
        "url":""
    },
    {
        "name":"Marshall Pet Products",
        "url":""
    },
    {
        "name":"F.M. Brown's Sons, Inc.",
        "url":""
    },
    {
        "name":"Wysong Corp - Supplements",
        "url":"https://www.wysong.net/dog-supplements"
    },
    {
        "name":"Missing Link",
        "url":""
    },
    {
        "name":"Van Ness Plastics, Inc.",
        "url":""
    },
    {
        "name":"Natura Pet Products",
        "url":"http://www.naturapet.com/"
    },
    {
        "name":"Ticked off Inc",
        "url":""
    },
    {
        "name":"Best Buy Bones",
        "url":""
    },
    {
        "name":"Pestell Pet Products",
        "url":""
    },
    {
        "name":"Pawsitively Gourmet  Llc",
        "url":""
    },
    {
        "name":"Pet Naturals of Vermont",
        "url":"https://www.petnaturals.com/"
    },
    {
        "name":"Petcurean",
        "url":"https://www.petcurean.com/"
    },
    {
        "name":"Mars Fishcare North America In",
        "url":""
    },
    {
        "name":"Fiber Core Llc",
        "url":""
    },
    {
        "name":"Sweet Meadow Farm",
        "url":""
    },
    {
        "name":"Safe Paw",
        "url":""
    },
    {
        "name":"Evolved",
        "url":""
    },
    {
        "name":"Solid Gold Health Products",
        "url":"https://www.solidgoldpet.com/"
    },
    {
        "name":"Worthy Dog",
        "url":""
    },
    {
        "name":"Jolly Pets",
        "url":""
    },
    {
        "name":"Carlson Pet Products",
        "url":""
    },
    {
        "name":"K & H Manufacturing, Llc",
        "url":""
    },
    {
        "name":"Millers Forge Inc",
        "url":""
    },
    {
        "name":"Kitty Kaviar",
        "url":""
    },
    {
        "name":"Premier Pet Products",
        "url":""
    },
    {
        "name":"Clix",
        "url":""
    },
    {
        "name":"Musher's Secret",
        "url":""
    },
    {
        "name":"Nutramax",
        "url":""
    },
    {
        "name":"Dreamcrates",
        "url":""
    },
    {
        "name":"Doskocil",
        "url":""
    },
    {
        "name":"Triple-pet",
        "url":""
    },
    {
        "name":"Benebone",
        "url":""
    },
    {
        "name":"Furminator",
        "url":""
    },
    {
        "name":"Api",
        "url":""
    },
    {
        "name":"Carnivore Meat Company Llc",
        "url":""
    },
    {
        "name":"Tuffy's",
        "url":""
    },
    {
        "name":"Explore",
        "url":""
    },
    {
        "name":"Purebites",
        "url":""
    },
    {
        "name":"Loving Pets",
        "url":""
    },
    {
        "name":"The Honest Kitchen",
        "url":""
    },
    {
        "name":"Plato Pet Treats",
        "url":""
    },
    {
        "name":"Tiki Cat",
        "url":""
    },
    {
        "name":"Misc",
        "url":""
    },
    {
        "name":"Safari",
        "url":""
    },
    {
        "name":"West Paw",
        "url":""
    },
    {
        "name":"Patchwork Pet",
        "url":""
    },
    {
        "name":"Cadet",
        "url":""
    },
    {
        "name":"Mutt Nose Best",
        "url":"https://muttnosebest.com/"
    },
    {
        "name":"Natural Chemistry",
        "url":""
    },
    {
        "name":"Nature's Miracle",
        "url":""
    },
    {
        "name":"Alzoo",
        "url":""
    },
    {
        "name":"Shea Pet",
        "url":""
    },
    {
        "name":"Zymox",
        "url":""
    },
    {
        "name":"Gimborn Usa",
        "url":""
    },
    {
        "name":"Pet-ag, Inc.",
        "url":""
    },
    {
        "name":"Azmira",
        "url":""
    },
    {
        "name":"Nutri-vet, Llc",
        "url":""
    },
    {
        "name":"Mammoth Pet Products",
        "url":""
    },
    {
        "name":"Tyson Pet Products Inc",
        "url":""
    },
    {
        "name":"Multipet",
        "url":""
    },
    {
        "name":"Super Pet",
        "url":""
    },
    {
        "name":"Penn-plax",
        "url":""
    },
    {
        "name":"Pets International, Ltd",
        "url":""
    },
    {
        "name":"Darford Holding Company Inc",
        "url":""
    },
    {
        "name":"Howard Pet Products",
        "url":""
    },
    {
        "name":"Solvit Products,Lp",
        "url":""
    },
    {
        "name":"The Company of Animals",
        "url":""
    },
    {
        "name":"Deep Sea Aq",
        "url":""
    },
    {
        "name":"Fiesta ",
        "url":""
    },
    {
        "name":"Ruffwear",
        "url":""
    },
    {
        "name":"Hueter Toledo Inc",
        "url":""
    },
    {
        "name":"Company of Animals",
        "url":""
    },
    {
        "name":"Thundershirt",
        "url":""
    },
    {
        "name":"California Natural",
        "url":""
    },
    {
        "name":"Oster Corporation",
        "url":""
    },
    {
        "name":"United Pet Group",
        "url":""
    },
    {
        "name":"Freedom",
        "url":""
    },
    {
        "name":"Okocat",
        "url":""
    },
    {
        "name":"Wild Side Salmon",
        "url":""
    },
    {
        "name":"Radagast Pet Food, Inc",
        "url":""
    },
    {
        "name":"Durabelt",
        "url":""
    },
    {
        "name":"Champion Petfoods Lp.",
        "url":""
    },
    {
        "name":"Hugglehounds",
        "url":""
    },
    {
        "name":"Newman's Own Organics",
        "url":"http://www.newmansown.com/pet-food/organics"
    },
    {
        "name":"K9 Granola Factory",
        "url":""
    },
    {
        "name":"Lennox International",
        "url":""
    },
    {
        "name":"Petsafe",
        "url":""
    },
    {
        "name":"Henry & Clemmie's",
        "url":""
    },
    {
        "name":"Stewarts Treats",
        "url":""
    },
    {
        "name":"Fashion Pet",
        "url":""
    },
    {
        "name":"Valor",
        "url":""
    },
    {
        "name":"Supercat",
        "url":""
    },
    {
        "name":"Vip Products",
        "url":""
    },
    {
        "name":"Pet Safety Alert",
        "url":""
    },
    {
        "name":"Vetoquinol Usa",
        "url":""
    },
    {
        "name":"Sergeants Pet Care Products",
        "url":""
    },
    {
        "name":"Zoo Med",
        "url":""
    },
    {
        "name":"World's Best Litter",
        "url":""
    },
    {
        "name":"Jw Pet Company Inc",
        "url":""
    },
    {
        "name":"Cosmic Pet",
        "url":""
    },
    {
        "name":"Yoghund",
        "url":""
    },
    {
        "name":"Aqueon",
        "url":""
    },
    {
        "name":"Kent Pet Group Inc",
        "url":""
    },
    {
        "name":"Blue Ribbon Pet Products",
        "url":""
    },
    {
        "name":"Marchiorousa",
        "url":""
    },
    {
        "name":"Perrigo Animal Health",
        "url":""
    },
    {
        "name":"Rawz Natural Pet Food Inc",
        "url":""
    },
    {
        "name":"Nupro Supplements",
        "url":""
    },
    {
        "name":"Healthy Essentials",
        "url":""
    },
    {
        "name":"American Colloid",
        "url":""
    },
    {
        "name":"Petrageous Designs",
        "url":""
    },
    {
        "name":"Fruitables",
        "url":""
    },
    {
        "name":"Booda",
        "url":""
    },
    {
        "name":"Ware Manufacturing, Inc.",
        "url":""
    },
    {
        "name":"Ani Mate  Inc.",
        "url":""
    },
    {
        "name":"Innovative Design & Sourc Llc",
        "url":""
    },
    {
        "name":"Lixit Animal Care Products",
        "url":""
    },
    {
        "name":"Barron's",
        "url":""
    },
    {
        "name":"Planet Dog",
        "url":""
    },
    {
        "name":"Durapet",
        "url":""
    },
    {
        "name":"Knight Pet",
        "url":""
    },
    {
        "name":"Koller Craft",
        "url":""
    },
    {
        "name":"Bags on Board",
        "url":""
    },
    {
        "name":"Fetch for Pets / Burts Bees",
        "url":""
    },
    {
        "name":"Charming Pet Products",
        "url":""
    },
    {
        "name":"Pure Vita",
        "url":""
    },
    {
        "name":"Animal Essentials",
        "url":""
    },
    {
        "name":"Beco",
        "url":""
    },
    {
        "name":"Sherpa Pet Group",
        "url":""
    },
    {
        "name":"Flexi Usa",
        "url":""
    },
    {
        "name":"Himalayan Dog Chew",
        "url":"https://www.himalayan.pet/"
    },
    {
        "name":"Applaws",
        "url":""
    },
    {
        "name":"Earth Animal",
        "url":"https://www.earthanimal.com/"
    },
    {
        "name":"Kurgo",
        "url":""
    },
    {
        "name":"Diggin Your Dog",
        "url":""
    },
    {
        "name":"L/M Animal Farms",
        "url":""
    },
    {
        "name":"Hound and Gatos",
        "url":""
    },
    {
        "name":"Ideal Pet Products/Perfect Pet",
        "url":""
    },
    {
        "name":"Petpals Group Inc",
        "url":""
    },
    {
        "name":"Lees Aquarium & Pet Products",
        "url":""
    },
    {
        "name":"Ims Trading",
        "url":""
    },
    {
        "name":"Licks",
        "url":""
    },
    {
        "name":"Icelandic+",
        "url":""
    },
    {
        "name":"Yeowww! Catnip",
        "url":""
    },
    {
        "name":"Northwest Naturals",
        "url":""
    },
    {
        "name":"Rc Pet",
        "url":""
    },
    {
        "name":"Paws Aboard",
        "url":""
    },
    {
        "name":"Pet Kelp",
        "url":""
    },
    {
        "name":"Aquarium Systems",
        "url":""
    },
    {
        "name":"Bear and the Rat",
        "url":""
    },
    {
        "name":"Waggers",
        "url":""
    },
    {
        "name":"Wild Calling",
        "url":""
    },
    {
        "name":"Oxbow Animal Health",
        "url":""
    },
    {
        "name":"Roma",
        "url":""
    },
    {
        "name":"Aspen Pet Products",
        "url":""
    },
    {
        "name":"Coastside Bio - Nutrisea",
        "url":""
    },
    {
        "name":"Earth Rated",
        "url":""
    },
    {
        "name":"Woodstream Corp",
        "url":""
    },
    {
        "name":"Rad Cat Raw",
        "url":"http://www.radfood.com/"
    },
    {
        "name":"Answers",
        "url":""
    },
    {
        "name":"Bff",
        "url":""
    },
    {
        "name":"Smart N Tasty",
        "url":""
    },
    {
        "name":"Daves Pet Food",
        "url":"https://davespetfood.com/"
    },
    {
        "name":"Nutri Source",
        "url":"http://nutrisourcepetfoods.com/homepage"
    },
    {
        "name":"Petrapport Inc",
        "url":""
    },
    {
        "name":"Kdr Pet Treats",
        "url":""
    },
    {
        "name":"Sporn Pet Products",
        "url":""
    },
    {
        "name":"Bavarian Cat Toys",
        "url":""
    },
    {
        "name":"Vetri Science",
        "url":""
    },
    {
        "name":"Hydor",
        "url":""
    },
    {
        "name":"Weiss Walkie",
        "url":""
    },
    {
        "name":"Happy Dog",
        "url":""
    },
    {
        "name":"Pet Studio ",
        "url":""
    },
    {
        "name":"Open Farm",
        "url":"https://www.openfarmpet.com/"
    },
    {
        "name":"Steve's Real Food",
        "url":"http://www.stevesrealfood.com/"
    },
    {
        "name":"Sojos",
        "url":"https://www.sojos.com/"
    },
    {
        "name":"Andy's Dandys ",
        "url":""
    },
    {
        "name":"Vital Essentials",
        "url":""
    },
    {
        "name":"Smart Cat",
        "url":""
    },
    {
        "name":"Polka Dog Bakery",
        "url":""
    },
    {
        "name":"Etta Says",
        "url":""
    },
    {
        "name":"Harry Barker",
        "url":""
    },
    {
        "name":"Zero Odor",
        "url":""
    },
    {
        "name":"Petsport Usa",
        "url":""
    },
    {
        "name":"Kaytee Products Inc",
        "url":""
    },
    {
        "name":"Green Mountain Organics",
        "url":""
    },
    {
        "name":"Poulin",
        "url":""
    },
    {
        "name":"Vee Enterprises",
        "url":""
    },
    {
        "name":"Eco Pup",
        "url":""
    },
    {
        "name":"Imagine This",
        "url":""
    },
    {
        "name":"Feline Pine",
        "url":""
    },
    {
        "name":"Red Barn",
        "url":""
    },
    {
        "name":"Canada Pooch",
        "url":""
    },
    {
        "name":"Preppy Puppy",
        "url":""
    },
    {
        "name":"Portland Pet Food Co.",
        "url":"https://portlandpetfoodcompany.com/"
    },
    {
        "name":"Fat Cat",
        "url":""
    },
    {
        "name":"Pawbreakers",
        "url":""
    },
    {
        "name":"Hot Cat",
        "url":""
    },
    {
        "name":"Microcyn",
        "url":""
    },
    {
        "name":"Robbins",
        "url":""
    },
    {
        "name":"Front Porch Pets",
        "url":""
    },
    {
        "name":"Petzlife",
        "url":""
    },
    {
        "name":"Blue Buffalo",
        "url":"https://bluebuffalo.com/"
    },
    {
        "name":"Red Dingo",
        "url":""
    },
    {
        "name":"Chuckit",
        "url":""
    },
    {
        "name":"Dog Gone Smart",
        "url":""
    },
    {
        "name":"Stella & Chewys",
        "url":"https://www.stellaandchewys.com/"
    },
    {
        "name":"Doggie Safe N Dry",
        "url":""
    },
    {
        "name":"Precision Pet Products",
        "url":""
    },
    {
        "name":"Wellness",
        "url":"https://www.wellnesspetfood.com/"
    },
    {
        "name":"Paragon Pet Products Usa Inc.",
        "url":""
    },
    {
        "name":"Raw Basics, Llc",
        "url":""
    },
    {
        "name":"Honest Kitchen",
        "url":"https://www.thehonestkitchen.com/"
    },
    {
        "name":"Cloud Star",
        "url":""
    },
    {
        "name":"Acana",
        "url":"https://acana.com/?lang=usa"
    },
    {
        "name":"Vista Products",
        "url":""
    },
    {
        "name":"Worldwise Inc / Pet Links",
        "url":""
    },
    {
        "name":"Midwest",
        "url":""
    },
    {
        "name":"Fromm",
        "url":"https://frommfamily.com/"
    },
    {
        "name":"Mendota",
        "url":""
    },
    {
        "name":"Outward Hound",
        "url":""
    },
    {
        "name":"Ziwi Peak",
        "url":""
    },
    {
        "name":"Soda Pup",
        "url":""
    },
    {
        "name":"Whimzees",
        "url":""
    },
    {
        "name":"Bellrock Growers Inc",
        "url":""
    },
    {
        "name":"Ethical Product Inc.",
        "url":""
    },
    {
        "name":"Kyjen Company",
        "url":""
    },
    {
        "name":"Kong",
        "url":""
    },
    {
        "name":"Our Pets Company",
        "url":""
    },
    {
        "name":"Earthborn",
        "url":"https://www.earthbornholisticpetfood.com/"
    },
    {
        "name":"Orijen",
        "url":"https://www.orijen.ca/us/"
    },
    {
        "name":"Petstages",
        "url":""
    },
    {
        "name":"Wells Pet Food",
        "url":""
    },
    {
        "name":"Coastal Pet Products",
        "url":""
    },
    {
        "name":"Miraclecorp Products",
        "url":""
    },
    {
        "name":"Pets Inter (Super Pets)",
        "url":""
    },
    {
        "name":"Bramton",
        "url":""
    },
    {
        "name":"Four Paws Products",
        "url":""
    },
    {
        "name":"Tucker's",
        "url":""
    },
    {
        "name":"Muntech Products Inc",
        "url":""
    },
    {
        "name":"Natures Miracle",
        "url":""
    },
    {
        "name":"Spectrum Brands",
        "url":""
    },
    {
        "name":"Pioneer Pet Products,Llc",
        "url":""
    },
    {
        "name":"Sportmix",
        "url":""
    },
    {
        "name":"Bainbridge Mercantile",
        "url":""
    },
    {
        "name":"Wholistic Pet",
        "url":"https://www.wholisticpetorganics.com/"
    },
    {
        "name":"Wet Noz",
        "url":""
    },
    {
        "name":"Alpha Lamda Group",
        "url":""
    },
    {
        "name":"Bio-pro Research/Urine off Slv080",
        "url":""
    },
    {
        "name":"Eqyss Grooming Products",
        "url":""
    },
    {
        "name":"American Pet Nutrition",
        "url":""
    },
    {
        "name":"Hempvet",
        "url":""
    },
    {
        "name":"Radio Systems Corp.(Pet Safe)",
        "url":""
    },
    {
        "name":"Petkind",
        "url":""
    },
    {
        "name":"Natural Balance Pet Foods Inc",
        "url":""
    },
    {
        "name":"Bergan",
        "url":""
    },
    {
        "name":"Pet Alert",
        "url":""
    },
    {
        "name":"Supreme",
        "url":""
    },
    {
        "name":"Natures Logic",
        "url":""
    },
    {
        "name":"Dog Bark Naturals",
        "url":""
    },
    {
        "name":"San Francisco Bay Brand, Inc.",
        "url":""
    },
    {
        "name":"Pawz",
        "url":""
    },
    {
        "name":"Vitakraft Sun Seed Inc",
        "url":""
    },
    {
        "name":"Bug Gone",
        "url":""
    },
    {
        "name":"Merrick Pet Care",
        "url":""
    },
    {
        "name":"Barkworthies",
        "url":""
    },
    {
        "name":"Cat Man Doo",
        "url":""
    },
    {
        "name":"Petmate",
        "url":""
    },
    {
        "name":"Happy Howie",
        "url":""
    },
    {
        "name":"North American Pet",
        "url":""
    },
    {
        "name":"Indepet",
        "url":""
    },
    {
        "name":"Felinenuvo Grand",
        "url":""
    },
    {
        "name":"Goli Designs",
        "url":""
    },
    {
        "name":"Bravo Pet Food",
        "url":"http://www.bravopetfoods.com/index.html"
    },
    {
        "name":"Bach Flower Essences",
        "url":""
    },
    {
        "name":"Chilly Dog",
        "url":""
    },
    {
        "name":"Prevue",
        "url":""
    },
    {
        "name":"Petlit",
        "url":""
    },
    {
        "name":"Doggie Design",
        "url":""
    },
    {
        "name":"Outwa",
        "url":""
    },
    {
        "name":"Zignature",
        "url":""
    },
    {
        "name":"Wellpet",
        "url":""
    },
    {
        "name":"Wells Pet Foods",
        "url":""
    },
    {
        "name":"Andis Co.",
        "url":""
    },
    {
        "name":"Redbarn Pet Products",
        "url":""
    },
    {
        "name":"Bocces Bakery",
        "url":""
    },
    {
        "name":"Healthy Pet",
        "url":""
    },
    {
        "name":"Thunderworks",
        "url":""
    },
    {
        "name":"Prepp",
        "url":""
    },
    {
        "name":"Whitebridge Pet Brand-cloudstr",
        "url":""
    },
    {
        "name":"Boxiecat",
        "url":""
    },
    {
        "name":"Canidae",
        "url":""
    },
    {
        "name":"Wigzi",
        "url":""
    },
    {
        "name":"Horsemens Pride Inc.",
        "url":""
    },
]);