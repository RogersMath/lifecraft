import React from 'react';
import { useGame, ActionTypes } from '../context/GameContext';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

function GamePlay() {
  const { state, dispatch } = useGame();
  const { player, currentTurn } = state;

  const advanceYear = () => {
    if (currentTurn < 120) { // 30 years * 4 turns per year
      dispatch({ type: ActionTypes.ADVANCE_TURN });
      dispatch({
        type: ActionTypes.UPDATE_PLAYER,
        payload: { 
          finances: {
            ...player.finances,
            cash: player.finances.cash + 10000 // Simplified savings increase
          }
        }
      });
      if (currentTurn % 4 === 3) {
        dispatch({
          type: ActionTypes.UPDATE_PLAYER,
          payload: { age: player.age + 1 }
        });
      }
    }
  };

  const addSkill = (skill) => {
    if (!player.skills.includes(skill)) {
      dispatch({
        type: ActionTypes.UPDATE_PLAYER,
        payload: { 
          skills: [...player.skills, skill]
        }
      });
    }
  };

  const setLocation = (location) => {
    dispatch({
      type: ActionTypes.UPDATE_PLAYER,
      payload: { location }
    });
  };

  const setCareer = (career) => {
    dispatch({
      type: ActionTypes.UPDATE_PLAYER,
      payload: { career }
    });
  };

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">LifeCraft</h1>
      
      <div className="grid grid-cols-2 gap-4 mb-4">
        <Card>
          <CardHeader>
            <CardTitle>Life Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Age: {player.age}</p>
            <p>Year: {Math.floor(currentTurn / 4)}/30</p>
            <Progress value={(currentTurn / 120) * 100} className="mt-2" />
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Finances</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Savings: ${player.finances.cash.toLocaleString()}</p>
          </CardContent>
        </Card>
      </div>
      
      <Card className="mb-4">
        <CardHeader>
          <CardTitle>Location & Career</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex space-x-4">
            <Select onValueChange={setLocation} value={player.location}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select location" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="nyc">New York City</SelectItem>
                <SelectItem value="sf">San Francisco</SelectItem>
                <SelectItem value="chicago">Chicago</SelectItem>
              </SelectContent>
            </Select>
            
            <Select onValueChange={setCareer} value={player.career}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select career" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="software">Software Developer</SelectItem>
                <SelectItem value="finance">Financial Analyst</SelectItem>
                <SelectItem value="marketing">Marketing Manager</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>
      
      <Card className="mb-4">
        <CardHeader>
          <CardTitle>Skills</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {player.skills.map((skill, index) => (
              <span key={index} className="bg-blue-100 text-blue-800 px-2 py-1 rounded">
                {skill}
              </span>
            ))}
          </div>
          <div className="mt-2">
            <Button onClick={() => addSkill("Public Speaking")} className="mr-2">Learn Public Speaking</Button>
            <Button onClick={() => addSkill("Data Analysis")} className="mr-2">Learn Data Analysis</Button>
            <Button onClick={() => addSkill("Sales")}>Learn Sales</Button>
          </div>
        </CardContent>
      </Card>
      
      <Button onClick={advanceYear} disabled={currentTurn >= 120}>Advance Quarter</Button>
    </div>
  );
}

export default GamePlay;