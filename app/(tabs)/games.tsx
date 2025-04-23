import { useState } from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';

type Die = {
  id: number;
  number: number | null;
  toSave: boolean,
  save: boolean;
};

export default function Tab() {
  const [startGame, setStartGame] = useState<boolean>(false);
  const [globalScore, setGlobalScore] = useState<number | null>(null);
  const [score, setScore] = useState<number | null>(null);
  const [dice, setDice] = useState<Die[]>([
    {
      id: 1,
      number: null,
      toSave: false,
      save: false
    },
    {
      id: 2,
      number: null,
      toSave: false,
      save: false
    },{
      id: 3,
      number: null,
      toSave: false,
      save: false
    },{
      id: 4,
      number: null,
      toSave: false,
      save: false
    },{
      id: 5,
      number: null,
      toSave: false,
      save: false
    },{
      id: 6,
      number: null,
      toSave: false,
      save: false
    }
  ])

  function hasValidCombo(dicePool: Die[]): boolean {
    const activeDice = dicePool.filter(die => !die.save && die.number !== null).map(die => die.number!) as number[];
  
    if (activeDice.length === 0) return false;
  
    // Умова 1: Є 1 або 5
    if (activeDice.includes(1) || activeDice.includes(5)) return true;
  
    // Умова 2: Три або більше однакових
    const counts: Record<number, number> = {};
    activeDice.forEach(num => {
      counts[num] = (counts[num] || 0) + 1;
    });
    if (Object.values(counts).some(count => count >= 3)) return true;
  
    // Умова 3: П'ять або більше чисел по порядку
    const sorted = Array.from(new Set(activeDice)).sort((a, b) => a - b);
    let streak = 1;
    for (let i = 1; i < sorted.length; i++) {
      if (sorted[i] === sorted[i - 1] + 1) {
        streak++;
        if (streak >= 5) return true;
      } else {
        streak = 1;
      }
    }
  
    return false;
  }
  

  function canSubmit(): boolean {
    const selected = dice.filter(die => die.toSave && die.number !== null).map(die => die.number!) as number[];
  
    if (selected.length === 0) return false;
  
    // Умова 1: Є 1 або 5
    if (selected.includes(1) || selected.includes(5)) {
      return true;
    }
  
    // Умова 2: Три або більше однакових
    const counts: Record<number, number> = {};
    selected.forEach(num => {
      counts[num] = (counts[num] || 0) + 1;
    });
    if (Object.values(counts).some(count => count >= 3)) {
      return true;
    }
  
    // Умова 3: П'ять або більше чисел по порядку
    const sorted = Array.from(new Set(selected)).sort((a, b) => a - b);
    let streak = 1;
    for (let i = 1; i < sorted.length; i++) {
      if (sorted[i] === sorted[i - 1] + 1) {
        streak++;
        if (streak >= 5) return true;
      } else {
        streak = 1;
      }
    }
  
    return false;
  }
  

  function throwDice() {
    setStartGame(true);
    setGlobalScore(0);
    setScore(0);
    let newDice = dice.map(die => {
      return {
        ...die,
        number: Math.floor(Math.random() * 6) + 1
      };
    });

    if (!hasValidCombo(newDice)) {
      setScore(0); // гравець втрачає очки
      newDice = newDice.map(die => ({
        ...die,
        save: false
      }));
    }
    setDice(newDice);
  }

  function saveThrowDice() {
    let roundScore = 0;
  
    let newDice = dice.map(die => {
      if (die.toSave) {
        roundScore += die.number ?? 0;
        return {
          ...die,
          toSave: false,
          save: true
        };
      }
      if (die.save) return die;
      return {
        ...die,
        number: Math.floor(Math.random() * 6) + 1
      };
    });
  
    setScore(prev => (prev ?? 0) + roundScore);
  
    const allSaved = newDice.every(die => die.save);
  
    if (allSaved) {
      newDice = newDice.map(die => ({
        ...die,
        save: false
      }));
  
      newDice = newDice.map(die => ({
        ...die,
        number: Math.floor(Math.random() * 6) + 1
      }));
    }
  
    if (!hasValidCombo(newDice)) {
      setScore(0); // гравець втрачає очки
      newDice = newDice.map(die => ({
        ...die,
        save: false
      }));
    }

    setDice(newDice);
  }
  
  function finishDice() {
    let roundScore = 0;
  
    const newDice = dice.map(die => {
      if (die.toSave) {
        roundScore += die.number ?? 0;
      }
      return {
        ...die,
        number: null,
        toSave: false,
        save: false
      };
    });
  
    const finalScore = (score ?? 0) + roundScore;
    setGlobalScore(finalScore);
    setScore(null);
    setStartGame(false);
    setDice(newDice);
  }
  
  
  
  function toggleToSave(id: number) {
    const newDice = dice.map(die =>
      die.id === id ? { ...die, toSave: !die.toSave } : die
    );
    setDice(newDice);
  }

  return (
    <View style={styles.container}>
      <Text>Game</Text>
      <Text>{globalScore}</Text>
      {startGame && 
        <View>
          <Text>{score}</Text>
        </View>}
      {!startGame && 
      <Button title='Throw' onPress={throwDice}/>}
      {startGame &&
        <> 
          <View style={styles.field}>
            <View>
              {dice.map((die)=> {
                if (!die.save) {
                  return(
                    <TouchableOpacity key={die.id} onPress={() => toggleToSave(die.id)} style={[styles.dice, die.toSave && styles.toSavedDie]}>
                      <Text style={{color: "white", fontSize: 18, fontWeight: "bold"}}>{die.number}</Text>
                    </TouchableOpacity>
                  )
                }
              })}
            </View>
            <View>
              {dice.map((die)=> {
                if (die.save) {
                  return(
                    <View key={die.id} style={[styles.dice, styles.savedDie]}>
                      <Text style={{color: "white", fontSize: 18, fontWeight: "bold"}}>{die.number}</Text>
                    </View>
                  )
                }
              })}
            </View>
          </View>
        <View>
          <Button title='Save and Throw' onPress={saveThrowDice} disabled={!canSubmit()}/>
          <Button title='Finish' onPress={finishDice} disabled={!canSubmit()}/>
        </View>
      </>
      }
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  },
  field: {
    display: "flex",
    flexDirection:"row",
    flexWrap: "wrap",
    width: "100%",
    justifyContent: "space-evenly"
  },
  dice: {
    backgroundColor: "grey", 
    width: 60, 
    height: 60, 
    margin: 20, 
    display: "flex", 
    justifyContent: "center", 
    alignItems: "center"
  }, 
  toSavedDie: {
    backgroundColor: "green"
  },
  savedDie: {
    backgroundColor: "lightgrey"
  }
});
