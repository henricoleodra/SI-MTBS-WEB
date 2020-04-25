// Sidebar & Summary
export const compStatusChange = (comp) => {
    return{
        type : comp
    }
}

// DATA ANAK
export const DataAnakChange = (comp, ans) => {
    return{
        type : comp,
        answer : ans
    }
}

// ANSWER TBU
export const AnsTBUChange = (comp, ans) => {
    return{
        type : comp,
        answer : ans
    }
}

// KLASIFIKASI TBU
export const KlasifikasiTBUChange = (comp, ans) =>{
    return{
        type : comp,
        answer : ans
    }
}

// ANSWER BATUK
export const AnsBatukChange = (comp, ans) => {
    return{
        type : comp,
        answer : ans
    }
}

// KLASIFIKASI BATUK
export const KlasifikasiBatukChange = (comp, ans) =>{
    return{
        type : comp,
        answer : ans
    }
}