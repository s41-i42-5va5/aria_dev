/* Local presentation state. Recorded framework output lives in ARIA_EVIDENCE. */
(() => {
  'use strict';
  const fresh = () => ({schema:3,view:'demo',step:0,criterion:0,component:'rights',role:'viewer',revision:0,requestStatus:'new',attempt:null,check:null,decision:null,taskLocked:false,planReady:false,ai:'codex',depth:'quick',lease:null,claimMessage:null,visited:[0],history:[]});
  function readiness(s) {
    if (!s.taskLocked || !s.planReady) return {kind:'blocked',title:'Save the task and plan first.',reason:'The acceptance criteria and work plan must be defined before acceptance.'};
    if (!s.check) return {kind:'blocked',title:'No check result is available.',reason:'Open the “Checks” stage and read the result for the selected version.'};
    if (s.check.revision !== s.revision) return {kind:'blocked',title:'The file changed after verification.',reason:'The recorded result belongs to an earlier version. In the actual run, A.R.I.A. rejected closure in this situation.'};
    if (!s.check.passed) return {kind:'blocked',title:'The checks found a permission violation.',reason:'A user without the required permission can change the status. The fix must be checked.'};
    return {kind:'prepared',title:'Both example criteria are verified.',reason:'The administrator changes the status; the read-only user is denied. Evidence is ready for acceptance. This example does not verify full project closure.'};
  }
  function reduce(input, action) {
    const s = JSON.parse(JSON.stringify(input));
    let note = null;
    switch(action.type) {
      case 'VIEW': if (['demo','about','team','functions'].includes(action.value)) s.view=action.value; break;
      case 'STEP': s.step=Math.max(0,Math.min(5,Number(action.value)||0)); s.view='demo'; if (!s.visited.includes(s.step)) s.visited.push(s.step); break;
      case 'CRITERION': s.criterion=Math.max(0,Math.min(1,Number(action.value)||0)); break;
      case 'COMPONENT': if (['rights','code','data'].includes(action.value)) s.component=action.value; break;
      case 'LOCK_TASK': s.taskLocked=true; note='Saved both acceptance criteria'; break;
      case 'PLAN': s.planReady=true; note='Saved the plan: change → checks → acceptance'; break;
      case 'AI': if (['codex','claude'].includes(action.value)) s.ai=action.value; break;
      case 'DEPTH': if (['quick','standard','deep'].includes(action.value)) s.depth=action.value; break;
      case 'ROLE': if (['admin','viewer'].includes(action.value)) {s.role=action.value; s.attempt=null;} break;
      case 'TRY_STATUS':
        if (s.revision>0 && s.role==='viewer') s.attempt={allowed:false,bug:false,text:'Denied: no permission to make changes. The request status stayed unchanged.'};
        else {s.requestStatus='in_progress'; s.attempt={allowed:true,bug:s.role==='viewer',text:s.role==='viewer'?'The status changed without permission. This violates an acceptance criterion.':'The administrator changed the status.'};}
        note=s.attempt.text; break;
      case 'RESET_REQUEST': s.requestStatus='new'; s.attempt=null; break;
      case 'FIX': s.revision=1; s.requestStatus='new'; s.attempt=null; s.decision=null; note='Added a role check to the status update function'; break;
      case 'EDIT': s.revision=2; s.decision=null; note='Added a comment to the file after verification'; break;
      case 'RESTORE': s.revision=1; s.decision=null; note='Restored the fixed version from the recorded run'; break;
      case 'CHECK':
        if(s.revision===2) {s.decision=readiness(s); note='No new check is recorded for the changed file';}
        else {s.check={revision:s.revision,passed:s.revision===1,record:s.revision===0?'before':'after'}; s.decision=null; note=s.check.passed?'Opened the record: both criteria passed':'Opened the record: permission violation found';} break;
      case 'READY': s.decision=readiness(s); note=s.decision.title; break;
      case 'CLAIM':
        if (!['A','B'].includes(action.value)) break;
        if(s.lease && s.lease!==action.value) s.claimMessage={kind:'blocked',text:`The scope is already assigned to developer ${s.lease}. The other contributor must choose different work or wait for the scope to be released.`};
        else {s.lease=action.value; s.claimMessage={kind:'prepared',text:`Developer ${action.value} claimed the status update scope.`};}
        note=s.claimMessage.text; break;
      case 'RELEASE': s.lease=null; s.claimMessage={kind:'prepared',text:'The scope is released. Another contributor can claim it.'}; note=s.claimMessage.text; break;
      case 'RESET': return fresh();
      default: return s;
    }
    if(note) {s.history.push({number:s.history.length?s.history[s.history.length-1].number+1:1,text:note}); s.history=s.history.slice(-40);}
    return s;
  }
  globalThis.ARIA_DEMO_ENGINE=Object.freeze({fresh,reduce,readiness});
})();
