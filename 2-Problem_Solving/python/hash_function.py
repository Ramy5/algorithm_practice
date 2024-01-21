vote = {}

def person_vote(name):
  if (vote.get(name)):
    print("kick him out he vote before")
  else:
    vote[name] = True


person_vote("ramy")
person_vote("mohamed")
person_vote("ramy")