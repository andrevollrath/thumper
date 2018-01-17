class ThumpsController < ApplicationController

  def index; end

  def it
    sleep(rand(1..3))

    mech = Mechanize.new {|agent| agent.user_agent_alias = 'Mac Safari'}
    page = mech.get('https://classifieds.castanet.net/details/local_experienced_bookkeeping_team/3341903/')

    respond_to { |format| format.js }     
  end
end
