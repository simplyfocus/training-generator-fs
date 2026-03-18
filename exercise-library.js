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
        {name: "Lunge (stretch)", type:"stretch", targets:["Front split","Hips"]},
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

//Function: format time
function formatTime(seconds){

  const m = Math.floor(seconds / 60);
  const s = seconds % 60;

  return (
    String(m).padStart(2,"0") +
    ":" +
    String(s).padStart(2,"0")
  );
}

// Function: Extract exercise targets + Populate drop-downs
function populateTargetSelect(selectId, mainTarget){

    const targets = [...new Set(
        ExLibrary
            .filter(ex => ex.targets.includes(mainTarget))
            .flatMap(ex => ex.targets)
            .filter(t => !mainOptions.includes(t))
    )].sort();

    const select = document.getElementById(selectId);

    targets.forEach(target => {

        const option = document.createElement("option");

        option.value = target;
        option.textContent = target;

        select.appendChild(option);

    });
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

// Store target selection by type (Dictionary)
function getWorkoutSelection(){
    const selection = {};
    selects.forEach(select => {
        selection[select.id] = Array.from(select.selectedOptions)
            .map(option => option.value);
    });
    return selection;
}

//Function: get remaining seconds
function sumUncheckedDurations(list){

    let total = 0;

    list.querySelectorAll("li").forEach(li => {

        const givenTime = document.getElementById(li.tag).dataset.seconds
        const isChecked = li.querySelector(".check-circle")
            .getAttribute("aria-pressed") === "true";

        if (!isChecked){
            total += parseInt(givenTime || "0");
        }

    });

    //console.log("total sec:",total)
    return total;
}

// ===== Day Class =====
class Day {
    constructor(_wkSelection) {
        this.jumps = null; this.power = null; this.strength = null; this.cardio = null; this.stretches = null;

        Object.keys(_wkSelection).forEach(category => {
            if(_wkSelection[category]){
                if (_wkSelection[category].includes("random")){
                    this[category] = getRandomTargets(category)

                } else { this[category] = _wkSelection[category]}
            }
        })
    }

    getJumps() {
        return this.jumps || null;
    }

    getPower() {
        if (!this.power) return null;

        let result = [];
        
        if (typeof this.power === "boolean") {
            result = ExLibrary.filter(ex => ex.type === "exercise" && ex.targets.includes("Power"));
        } else if (Array.isArray(this.power)) {
            for (let target of this.power) {
                    result.push(...ExLibrary
                        .filter(ex => ex.type === "exercise" && ex.targets.includes("Power") && ex.targets.includes(target)));
            }
        }
        result=[...new Set(result)]; // dedupe
        if (result.length > n_ofExercises) { result = randomSample(result, n_ofExercises);}

        return result.length ? result : null;
    }

    getStrength() {
        if (!this.strength) return null;

        let result = [];
        if (Array.isArray(this.strength)) {
            for (let target of this.strength) {
                    result.push(...ExLibrary
                        .filter(ex => ex.type === "exercise" && ex.targets.includes("Strength") && ex.targets.includes(target)));
            }    
        } else if (typeof this.strength === "string") {
            result = ExLibrary.filter(ex => ex.type === "exercise" && ex.targets.includes(this.strength))//-------.map(ex => ex.name);

        } else if (typeof this.strength === "boolean") {
            result = ExLibrary.filter(ex => ex.type === "exercise" && ex.targets.includes("Strength"))//-------.map(ex => ex.name);
        } 
        result=[...new Set(result)]; // dedupe
        if (result.length > n_ofExercises) { result = randomSample(result, n_ofExercises);}

        return result.length ? result : null;
        
    }
    
    getCardio() {
        if (!this.cardio) return null;
        let result = [];

        if (typeof this.cardio === "boolean") {
            result = ExLibrary.filter(ex => ex.type === "exercise" && ex.targets.includes("Cardio"));
        
        } else if (Array.isArray(this.cardio)) {
            for (let target of this.cardio) {
                    result.push(...ExLibrary
                        .filter(ex => ex.type === "exercise" && ex.targets.includes("Cardio") && ex.targets.includes(target)));
            }
            return result;
        }
        result=[...new Set(result)]; // dedupe
        if (result.length > n_ofExercises) { result = randomSample(result, n_ofExercises);}

        return result.length ? result : null;
    }

    getStretches() {
        if (!this.stretches) return null;

        let result = [];
        if (typeof this.stretches === "boolean") {
            result = ExLibrary.filter(ex => ex.type === "stretch");
        } else if (Array.isArray(this.stretches)) {
            for (let target of this.stretches) {
                    result.push(...ExLibrary
                        .filter(ex => ex.type === "stretch" && ex.targets.includes(target)));
            }
        }

        result=[...new Set(result)];   // dedupe
        if (result.length > n_ofExercises) { result = randomSample(result, n_ofExercises);}

        return result.length ? result : null;
    }

    getALL() {
        let todos = [];
        if (this.getJumps()) todos.push(...this.getJumps());
        if (this.getPower()) todos.push(...this.getPower());
        if (this.getStrength()) todos.push(...this.getStrength());
        if (this.getCardio()) todos.push(...this.getCardio());
        if (this.getStretches()) todos.push(...this.getStretches());

        return todos;
    }

    toString() {
        return `Day: ${this.day}`;
    }
}
