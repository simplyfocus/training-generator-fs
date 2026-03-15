const ExLibrary = [

            // Strength ========
            {name: "Calf Raises", type:"exercise", targets:["Strength", "Calves"]},
            {name: "Clamshell", type:"exercise", targets:["Strength", "Groin"]},
            {name: "Glute Bridge", type:"exercise", targets:["Strength", "Glutes"]},
            {name: "High Plank", type:"exercise", targets:["Strength", "Core"]},
            {name: "Landing kicks", type:"exercise", targets:["Strength", "Glutes","Legs","Quads"]},
            {name: "Landing Position Hold", type:"exercise", targets:["Strength", "Legs", "Glutes"]},
            {name: "Lower Back Extensions", type:"exercise", targets:["Strength", "Back"]},
            {name: "Low plank", type:"exercise", targets:["Strength", "Core"]},
            {name: "Lunge", type:"exercise", targets:["Strength", "Legs", "Glutes"]},
            {name: "Lying Leg Raises", type:"exercise", targets:["Strength", "Core"]},
            {name: "Push-up", type:"exercise", targets:["Strength", "Chest", "Arms"]},
            {name: "Russian Twists", type:"exercise", targets:["Strength", "Core", "Power"]},
            {name: "Squat", type:"exercise", targets:["Strength", "Legs", "Quads"]},
            {name: "Superman", type:"exercise", targets:["Strength", "Back"]},
            {name: "V-ups", type:"exercise", targets:["Strength", "Core"]},
            {name: "Wall Sit", type:"exercise", targets:["Strength", "Legs", "Glutes"]},
            

            // Balance ========
            {name: "Arabesque Hold", type:"exercise", targets:["Strength", "Balance","Glutes", "Hamstrings"]},
            {name: "Bosu Ball Balance", type:"exercise", targets:["Balance"]},
            {name: "Camel hold", type:"exercise", targets:["Hamstrings"]},
            {name: "Closed-eye landing", type:"exercise",targets:["Balance"]},
            {name: "Heel-to-Toe Walk", type:"exercise", targets:["Balance"]},
            {name: "Pistol Squat", type:"exercise", targets:["Strength", "Balance","Legs", "Glutes"]},
            {name: "Single-leg Stand", type:"exercise", targets:["Balance"]},
            {name: "Stability Ball Exercises", type:"exercise", targets:["Balance"]},
            {name: "Yoga Tree Pose", type:"exercise", targets:["Balance"]},
            
            
            // Power ========
            {name: "Backward swizzle jump + tap or 1/2turn", type:"exercise", targets:["Power"]},
            {name: "Box Jump", type:"exercise", targets:["Legs", "Quads","Power"]},
            {name: "Broad Jump", type:"exercise", targets:["Legs", "Power"]},
            {name: "Correr zancadas + waltz swing + h", type:"exercise", targets:["Hip flexors","Power"]},
            {name: "Fwd skater jumps", type:"exercise", targets:["Calves","Power"]},
            {name: "Lateral Bounds", type:"exercise", targets:["Legs", "Power"]},
            {name: "Skater Hops", type:"exercise", targets:["Legs", "Power"]},
            {name: "Tap Jump", type:"exercise", targets:["Legs", "Calves"]},
            {name: "Tuck Jumps", type:"exercise", targets:["Legs", "Core","Power"]},
            {name: "3➡️jumps + stick (2legs) + 🔁", type:"exercise", targets:["Power"]},
            {name: "➡️jump + ⬆️jump + stick (1leg)", type:"exercise", targets:["Power"]},
            {name: "3➡️jumps + 3⬅️jump + stick (1leg)", type:"exercise", targets:["Power"]},
            {name: "3➡️jumps + 3⬅️jump + landing (2legs)", type:"exercise", targets:["Power"]},

            // Cardio ========
            {name: "Burpees", type:"exercise", targets:["Cardio"]},
            {name: "High Knees", type:"exercise", targets:["Cardio","Core"]},
            {name: "Jumping Jacks", type:"exercise", targets:["Cardio"]},
            {name: "Mountain Climbers", type:"exercise", targets:["Cardio","Core","Power"]},

            // Stretches ========
            {name: "90/90 stretch", type:"stretch", targets:["Hips"]},
            {name: "Ankle under couch", type:"stretch", targets:["Ankles"]},
            {name: "Ankle rolls", type:"stretch", targets:["Ankles"]},
            {name: "Arabesque", type:"stretch", targets:["Extensions"]},
            {name: "Attitude", type:"stretch", targets:["Extensions"]},
            {name: "Backbend", type:"stretch", targets:["Back"]},
            {name: "Bridge", type:"stretch", targets:["Back"]},
            {name: "Butterfly stretch", type:"stretch", targets:["Hips"]},
            {name: "Cat-cow", type:"stretch", targets:["Back"]},
            {name: "Child's pose", type:"stretch", targets:["Back"]},
            {name: "Clamshell", type:"stretch", targets:["Turnout"]},
            {name: "Cobra", type:"stretch", targets:["Back"]},
            {name: "Couch stretch", type:"stretch", targets:["Quads"]},
            {name: "Cross-body shoulder stretch", type:"stretch", targets:["Shoulders"]},
            {name: "Developpe", type:"stretch", targets:["Extensions"]},
            {name: "Dorsiflexion stretch", type:"stretch", targets:["Ankles"]},
            {name: "Extended lunge", type:"stretch", targets:["Hamstrings"]},
            {name: "Frog pose", type:"stretch", targets:["Hips"]},
            {name: "Front splits", type:"stretch", targets:["Front split"]},
            {name: "High kick", type:"stretch", targets:["Hamstrings"]},
            {name: "Lunge", type:"stretch", targets:["Hips"]},
            {name: "Lunge", type:"stretch", targets:["Front split"]},
            {name: "Lying spine twist", type:"stretch", targets:["Back"]},
            {name: "Lying quad stretch", type:"stretch", targets:["Quads"]},
            {name: "Pancake", type:"stretch", targets:["Middle split","Hips"]},
            {name: "Passe", type:"stretch", targets:["Extensions"]},
            {name: "Plantarflexion stretch", type:"stretch", targets:["Ankles"]},
            {name: "Pull arm behind head", type:"stretch", targets:["Shoulders"]},
            {name: "Seated turnout stretch", type:"stretch", targets:["Turnout"]},
            {name: "Sciatic glides", type:"stretch", targets:["Hamstrings"]},
            {name: "Standing hamstring stretch", type:"stretch", targets:["Hamstrings"]},
            {name: "Standing pancake", type:"stretch", targets:["Middle split","Hips"]},
            {name: "Standing turnout stretch", type:"stretch", targets:["Turnout"]},
            {name: "Straddle", type:"stretch", targets:["Middle split"]},
            {name: "Wall shoulder stretch", type:"stretch", targets:["Shoulders"]},
];

// Load planned program
function loadPlan(day){
    jumps=null;power=null;strength=null;cardio=null;stretches=null;
    if (day === 0) {
        jumps = ["Axel","Toe-loop","Salchow"];
        cardio = "random";
    } else if (day === 1) {
        jumps = ["Salchow","Toe-loop"];
        strength = ["Balance","Arms","Shoulders","Core","Back"];
    } else if (day === 2) {
        strength = ["Balance","Core","Glutes","Hamstrings","Hip flexors","Quads","Calves"];
        stretches = ["Front split","Extensions"];
    } else if (day === 3) {
        stretches = ["Shoulders","Ankles","Middle split","Back"];
    } else if (day === 4) {
        jumps = ["Loop", "Flip", "Lutz"];
    } else if (day === 5) {
        jumps = ["Axel","Loop","Rotations","Flip","Lutz"];
        power = "random";
        stretches = ["Hips","Turnout"];
    } else {
        power = "random";
        cardio = "random";
    }
    return {"jumps":jumps, "power":power, "strength":strength, "cardio":cardio, "stretches":stretches}
}

// Move an element
function moveElement(_id,_to){
    const element=document.getElementById(_id)
    const to=document.getElementById(_to)

    to.appendChild(element)
}

// Helper function: Random Sample
function randomSample(arr, n) {
    return [...arr].sort(() => 0.5 - Math.random()).slice(0, n);
}

// Helper function to update target list
function updateList() {

    raw_target_list.innerHTML = "";
    selects.forEach(select => {

        const selectedOptions = Array.from(select.selectedOptions);
        const category = select.id;   // jumps, strength, cardio, etc.

        selectedOptions.forEach(option => {

            const li = document.createElement("li");
            li.textContent = option.text;
            li.classList.add(category);  // add "category" class

            raw_target_list.appendChild(li);
        });
    });
    
};

// Clear selections
function clearSelections(){
    document.querySelectorAll("select").forEach(s => {
        s.selectedIndex = -1;
    });
    updateList();
}

// Update Random
function updateRandom(e){

    const select = e.target;
    const options = Array.from(select.options);

    const random = options.find(o => o.value === "random");
    if (!random) return;

    const others = options.filter(o => o !== random);

    // previous state stored on the select element
    const prevRandom = select._prevRandom || false;

    const randomNow = random.selected;
    const otherSelected = others.some(o => o.selected);

    // Case 1: user just clicked random
    if (!prevRandom && randomNow) {
        others.forEach(o => o.selected = false);
    }

    // Case 2: user clicked another option while random was selected
    if (prevRandom && otherSelected) {
        random.selected = false;
    }

    // save state for next change
    select._prevRandom = random.selected;

    console.log("updated random", select)
}

// Generate 2 random targets
function getRandomTargets(elementId){
    if (Array.from(document.getElementById(elementId).options).map(op => op.value).includes("random")){
    return randomSample(
        Array.from(document.getElementById(elementId).options)
        .map(op => op.value)
        .filter(v => !mainOptions.includes(v)),
    2)} else {return null}
};

function makeTrainingList(plan){
    if (typeof(plan)!="boolean"){
        console.log("Error: plan must be boolean.",plan);
        return -1
    }
    console.log("genHidden:",genHidden,"plan:",plan)
    
    if((raw_target_list.children.length > 0)||(plan||genHidden)){

        generatorPage.classList.toggle("hidden");
        workoutPage.classList.toggle("hidden");
        generateBtn.classList.toggle("middled")
    
        if(genHidden){genHidden=false;moveElement("generateWorkout","target-selection");moveElement("usePlanBtn","target-selection")
            timer.pause();document.getElementById("timer").style="display: none"
        } else {genHidden=true;
            if (plan){ workoutSelection=loadPlan(todayWD); clearSelections()} else {workoutSelection = getWorkoutSelection();}
            
            const todayObj = new Day(workoutSelection);
            const workoutItems = todayObj.getALL();
            displayItems = workoutItems && workoutItems.length ? [...warmups, ...workoutItems] : [...warmups];

            // console.log("workoutSelection= ",workoutSelection)
            // console.log("workoutItems= ",workoutItems)

            moveElement("generateWorkout","titleStacked")





            renderList();

        }
    }
}
